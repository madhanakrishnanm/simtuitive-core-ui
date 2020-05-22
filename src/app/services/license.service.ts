import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private apiService: ApiService) { }

  addLicense(payload) {
    return this.apiService.post('license/add-license', payload);
  }
  editLicense(payload) {
    return this.apiService.put('license/update-license', payload);
  }
  getAllLicense(payload) {
    return this.apiService.get('license/get-all-license', payload);
  }
  getLicenseById(payload) {
    return this.apiService.post('license/get-license', payload);
  }
  deleteLicense(payload) {
    return this.apiService.delete('license/delete-license', payload);
  }
}
