import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
   deleteId = null;
  location = [];
  industry = [];
  organizations = [];
  page = 1;
  totalPages = 0;
  deleteOrganizationId = null;
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              private organizationService: OrganizationService, private modalService: NgbModal) { }
  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getOrganizations(payload);
  }
  getOrganizations(payload){
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
