import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToastrService} from "ngx-toastr";
import {LicenseService} from "../../services/license.service";
import {OrganizationService} from "../../services/organization.service";

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  licenseForm: FormGroup;
  products = [
    {
      name: 'Advance Excel',
      id: "1"
    },
    {
      name: 'Operational Excellence',
      id: "2"
    },
  ];
  licenseIds = [];
  licenses = [];
  selectedProduct = null;
  selectedOrganization = null;
  selectedPaymentStatus = null;
  page = 1;
  totalPages = 0;
  searchQuery = null;
  datas = [ {
    "licenseId": "100000",
    "organization": "Admin5674",
    "orgId": "5ea04f13683ba84bccce5fdef",
    "productName": "Admin123",
    "productId": "5ea04f13683ba84bccce5fdef",
    "paymentStatus": "Approved",
    "creditLimit": 139,
    "narration": "welcome here license welcome",
    "sellingPrice": 4000,
    "dealSize": 2000,
    "numberOfLicense": 48,
    "createdAt": "2020-05-20T15:19:19.268+0000",
    "modifiedAt": "2020-05-20T15:20:11.767+0000",
    "createdBy": "Admin4@gmail.com",
    "modifiedBy": "Admin4@gmail.com",
    "status": "active"
  }];
  organisations = [];
  paymentStatuses = ['Paid', 'Pending', 'Incomplete'];
  licenseID;
  constructor( private formBuilder: FormBuilder,
               private ngxUiLoaderService: NgxUiLoaderService,
               private toastrService: ToastrService,
               public router: Router,
               public licenseService: LicenseService,
               public organizationService: OrganizationService,
               private modalService: NgbModal) { }

  ngOnInit(): void {

    const payload = {
      pageNo: this.page - 1,
    };
    this.getLicenses(payload);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  findOrganizationName(payload){
    this.organizationService.findOrganizationName(payload).subscribe((res: any) => {
      console.log(res);
      this.organisations = res.data;
    })
  }
  onOrganizationChange(event){
    if (!event) return
    this.selectedOrganization = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      orgName: this.selectedOrganization,
      product: this.selectedProduct,
      status: this.selectedPaymentStatus,
    };
    this.getLicenses(payload);
  }
  onProductChange(event){

  }
  onPaymentStatusChange(event){
    if (!event) return
    this.selectedPaymentStatus = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      orgName: this.selectedOrganization,
      product: this.selectedProduct,
      status: this.selectedPaymentStatus,
    };
    this.getLicenses(payload);
  }
  getLicenses(payload) {

    payload['query'] = this.searchQuery;
    payload['product'] = this.selectedProduct;
    payload['organization'] = this.selectedOrganization;
    payload['paymetStatus'] = this.selectedPaymentStatus;

    this.ngxUiLoaderService.start();
    this.licenseService.getAllLicense(payload).subscribe((res: any) => {
      console.log(res);
      this.licenses = res.data;
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  searchLicense(event){
    console.log(event);
    this.searchQuery = event.target.value;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      orgName: this.selectedOrganization,
      product: this.selectedProduct,
      status: this.selectedPaymentStatus,
    };
    this.getLicenses(payload);
  }

  requestDelete(PermissionId, modalReference) {
    this.licenseID = PermissionId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }

  delete() {
    const payload = {
      PermissionId: this.licenseID
    };
    console.log(payload);
   /* this.permissionService.deletePermission(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });*/
  }
}

