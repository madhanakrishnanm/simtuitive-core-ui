import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
   deleteId = null;
  organizations = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private organizationService: OrganizationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const payload = {};
    this.organizationService.getAllOrganization(payload).subscribe((res: any) => {
      console.log(res);
      this.organizations = res.data;
    });
  }
  requestDelete(userId, modalReference) {
    this.deleteId = userId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});

  }

  delete() {
    const payload = {
      userId: this.deleteId
    };
    console.log(payload);
    /*this.organizationService.(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });*/
  }
}
