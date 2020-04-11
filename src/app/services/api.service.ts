/* tslint:disable */
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // url: string = 'http://192.168.1.10:8000/';
  url: string = 'http://52.66.230.13/';
  // imgUri: string = 'http://192.168.1.10:8000/storage/';
  imgUri: string = 'http://52.66.230.13/storage/';
  reqHeader: any;

  constructor(public http: HttpClient) {
    this.reqHeader = new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    });
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    console.log(reqOpts);
    if (reqOpts) {
      reqOpts = {
        params: new HttpParams(),
        headers: this.reqHeader
      };
    } else {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }

  post(endpoint: string, body?: any, headers?: any) {
    let reqOpts;
    if (headers) {
      reqOpts = {
        headers: headers,
      };
    }
    return this.http.post(this.url + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + endpoint, body, reqOpts);
  }
}
