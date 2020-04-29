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
  deleteOrganizationId = null;
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
