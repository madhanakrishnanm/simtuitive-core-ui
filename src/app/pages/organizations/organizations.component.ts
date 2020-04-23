import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  organizations = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private organizationService: OrganizationService) { }

  ngOnInit(): void {
    let payload = {};
    this.organizationService.getAllOrganization(payload).subscribe((res: any)=>{
      console.log(res);
      this.organizations = res.data;
    })
  }

}
