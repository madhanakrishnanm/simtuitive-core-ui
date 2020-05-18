import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
 // for Ng-autoComplete
  keyword = 'organizations';
  organizationNames: any=[];
  //
   deleteId = null;
  locations = [];
  industries = [];
  organizations = [];
  searchQuery = null;
  selectedLocation = null;
  selectedIndustry = null;
  page = 1;
  totalPages = 0;
  deleteOrganizationId = null;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private organizationService: OrganizationService, private modalService: NgbModal) { }
  ngOnInit(): void {
    const payload = {
      pageNo: this.page - 1,
    };
    this.getOrganizations(payload);
    this.findOrganizationIndustry({});
    this.findOrganizationLocation({});
  }
  findOrganizationLocation(payload){
    this.organizationService.findOrganizationLocation(payload).subscribe((res: any) => {
      console.log(res);
      this.locations = res.data;
    })
  }
  findOrganizationIndustry(payload){
    this.organizationService.findOrganizationIndustry(payload).subscribe((res: any) => {
      console.log(res);
      this.industries = res.data;
    })
  }
  onLocationChange(event){
    this.selectedLocation = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      location: this.selectedLocation,
      industry: this.selectedIndustry
    };
    this.getOrganizations(payload);
  }
  onIndustryChange(event){
    this.selectedIndustry = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      location: this.selectedLocation,
      industry: this.selectedIndustry
    };
    this.getOrganizations(payload);
  }
  applyFilter(){
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      location: this.selectedLocation,
      industry: this.selectedIndustry
    };
    console.log(payload);
    this.getOrganizations(payload);
  }
  getOrganizations(payload) {

    payload['query'] = this.searchQuery;
    payload['location'] = this.selectedLocation;
    payload['industry'] = this.selectedIndustry;

    this.ngxUiLoaderService.start();
    this.organizationService.getAllOrganization(payload).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  searchOrganization(event){
    console.log(event);
    this.searchQuery = event.target.value;
    const payload = {
      pageno: this.page - 1,
      query: this.searchQuery,
    };
    this.getOrganizations(payload);
  }
  requestDelete(organizationId, modalReference) {
    this.deleteOrganizationId = organizationId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }


  delete() {
    const payload = {
      id: this.deleteOrganizationId
    };
    console.log(payload);
    this.organizationService.deleteOrganization(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
