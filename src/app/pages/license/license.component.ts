import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {
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
  constructor(public router: Router, private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit(): void {
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

