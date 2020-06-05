import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private apiService: ApiService) {
  }

  addOrganization(payload) {
    return this.apiService.post('org/add-org', payload);
  }

  editOrganization(payload) {
    return this.apiService.put('org/update-org', payload);
  }

  getAllOrganization(payload) {
    return this.apiService.get('org/getall-org', payload);
  }

  getOrganizationById(payload) {
    return this.apiService.post('org/get-org', payload);
  }

  deleteOrganization(payload) {
    return this.apiService.delete('org/delete-org', payload);
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
  getOrganizationNameAndId(payload) {
    return this.apiService.get('org/get-org-id-name', payload);
  }
}
