import { Component, OnInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor(private ngxSmartModalService: NgxSmartModalService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }
  requestLogin() {
    this.ngxSmartModalService.close('sessionModal');
    this.router.navigate(['login']);
  }
}
