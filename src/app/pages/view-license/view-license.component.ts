import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {LicenseService} from "../../services/license.service";
import {ToastrService} from "ngx-toastr";
import {OrganizationService} from "../../services/organization.service";
import * as moment from "moment";

@Component({
  selector: 'app-view-license',
  templateUrl: './view-license.component.html',
  styleUrls: ['./view-license.component.scss']
})
export class ViewLicenseComponent implements OnInit {

  subscribe = null;
  licenseId = null;
  license: any = {};

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private ngxUiLoaderService: NgxUiLoaderService,
              public route: ActivatedRoute,
              private licenseService: LicenseService,
              private toastrService: ToastrService,
              private organizationService: OrganizationService,
  ) { }

  ngOnInit(): void {
    this.ngxUiLoaderService.start();
    this.subscribe = this.route.params.subscribe(params => {
      this.licenseId = params.id; // (+) converts string 'id' to a number
      // console.log(this.organizationId);
      if (this.licenseId) {
        const payload = {
          id: this.licenseId
        };
        this.licenseService.getLicenseById(payload).subscribe((res: any) => {
          console.log(res);
          this.license = res.data;
          this.ngxUiLoaderService.stop();
        }, error => {
          this.ngxUiLoaderService.stop();
        });
      }
    });
  }
  formatDate(datetimeString){
    let dateObject = moment(new Date(Date.parse(datetimeString)));
    return dateObject.format('DD-MM-YYYY');
  }

}
