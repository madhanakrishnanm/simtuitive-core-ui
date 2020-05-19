import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
  licenseForm: FormGroup;
  product = [];
  licenseIds = [];
  datas = [{
    licenseId: '126754',
    dateOfCredit: '15.8.20',
    ProductName: 'Python',
    OrganizationName: 'Mark University',
    Licenses: '34567',
    PaymentStatus: 'Pending',
    CreditLimit: '90 Days',
    Narration: 'PO Done',
    SellingPrice: '$10000',
    DealSize: '$10000'
  }];
  organisation = [];
  status = [];
  licenseID;
  constructor( private formBuilder: FormBuilder,
               private ngxUiLoaderService: NgxUiLoaderService,
               private toastrService: ToastrService,
               public router: Router,
               private modalService: NgbModal)
  { }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit(): void {
    this.licenseForm = this.formBuilder.group({
      productId: ['', [Validators.required]],
      password: ['myadmin', [Validators.required]],
      // password: ['maran', [Validators.required]],
      remember: ['remember'],
    });
    this.licenseIds.push(this.datas[0].licenseId);
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

