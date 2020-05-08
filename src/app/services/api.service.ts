/* tslint:disable */
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // url: string = 'http://192.168.1.10:8000/';
  url: string = 'http://35.154.201.76/api/v1/';
  authUri: string = 'http://35.154.201.76/';
  // imgUri: string = 'http://192.168.1.10:8000/storage/';
  imgUri: string = 'http://35.154.201.76/storage/';
  reqHeader: any;

  constructor(public http: HttpClient) {
    this.reqHeader = {
      'Authorization': localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
  }

  get(endpoint: string, params?: any, headers?: any) {
    console.log(headers);
    let reqOpts;
    if (headers) {
      reqOpts = {
        params: new HttpParams(),
        headers: {...this.reqHeader, ...headers}
      };
    } else {
      reqOpts = {
        params: new HttpParams(),
        headers: this.reqHeader
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
        headers: new HttpHeaders({...headers}),
      };
    }else {
      reqOpts = {
        headers: new HttpHeaders({...this.reqHeader}),
      };
    }
    return this.http.post(this.url + endpoint, body, reqOpts);
  }
  auth(endpoint: string, body?: any, headers?: any) {
    let reqOpts;
    if (headers) {
      reqOpts = {
        headers: new HttpHeaders({...headers}),
      };
      console.log(reqOpts);
    }else {
      reqOpts = {
        headers: new HttpHeaders({...this.reqHeader}),
      };
    }
    return this.http.post(this.authUri + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, headers?: any) {
    let reqOpts;
    if (headers) {
      reqOpts = {
        headers: new HttpHeaders({...headers}),
      };
    }else {
      reqOpts = {
        headers: new HttpHeaders({...this.reqHeader}),
      };
    }
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, params, headers?: any) {
    let reqOpts;
    if (headers) {
      reqOpts = {
        body: params,
        headers: {...this.reqHeader, ...headers}
      };
    } else {
      reqOpts = {
        body: params,
        headers: this.reqHeader
      };
    }

    /*if (params) {
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }*/
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + endpoint, body, reqOpts);
  }
}
