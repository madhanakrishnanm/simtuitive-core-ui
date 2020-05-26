import { HttpRequest, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injector, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Observable, throwError } from "rxjs";
import { catchError, switchMap, tap} from "rxjs/operators";
import {UsersService} from "../services/users.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  refreshTokenInProgress = false;

  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private injector: Injector,
              private userService: UsersService,
              private router: Router) {}

  addAuthHeader(request) {
    const token = localStorage.getItem('token');
    if (token) {
      return request.clone({
        setHeaders: {
          "Authorization": token
        }
      });
    }
    return request;
  }

  refreshToken(): Observable<any> {
    if (this.refreshTokenInProgress) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    } else {
      this.refreshTokenInProgress = true;

      return this.userService.refreshToken().pipe(
        tap(() => {
          this.refreshTokenInProgress = false;
          this.tokenRefreshedSource.next();
        }),
        catchError(error =>{
          this.refreshTokenInProgress = false;
          this.logout();
          return null;
        }));
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["login"]).then();
  }

  handleResponseError(error, request?, next?) {
    // Business error
    if (error.status === 400) {
      console.log('application error')
    }

    // Invalid token error
    else if (error.status === 401) {
      console.log('Session expired or token expired');
      return this.refreshToken().pipe(
        switchMap(() => {
          request = this.addAuthHeader(request);
          return next.handle(request);
        }),
        catchError(e => {
          if (e.status !== 401) {
            return this.handleResponseError(e);
          } else {
            this.logout();
          }
        }));
    }

    // Access denied error
    else if (error.status === 403) {
      // Show message
      // Logout
      console.log('Access denied')
      this.logout();
    }

    // Server error
    else if (error.status === 500) {
      console.log('Server error')
    }

    // Maintenance error
    else if (error.status === 503) {
      // Show message
      console.log('Maintenance error')
      // Redirect to the maintenance page
    }

    return throwError(error);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle request
    request = this.addAuthHeader(request);

    // Handle response
    return next.handle(request).pipe(catchError(error => {
      return this.handleResponseError(error, request, next);
    }));
  }
}
