import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private apiService: ApiService) { }

  addLicense(payload) {
    return this.apiService.post('lic/add-license', payload);
  }
  editLicense(payload) {
    return this.apiService.put('lic/update-license', payload);
  }
  getAllLicense(payload) {
    return this.apiService.get('license/get-all-license', payload);
  }
  getLicenseById(payload) {
    return this.apiService.post('lic/get-licenses', payload);
  }
  deleteLicense(payload) {
    return this.apiService.delete('lic/delete-license', payload);
  }
  findOrganizationLocation(payload) {
    return this.apiService.get('org/getall-org-location', payload);
  }
  findOrganizationIndustry(payload) {
    return this.apiService.get('org/getall-org-industry', payload);
  }
  findOrganizationName(payload) {
    return this.apiService.get('org/getall-orgname', payload);
  }
}
