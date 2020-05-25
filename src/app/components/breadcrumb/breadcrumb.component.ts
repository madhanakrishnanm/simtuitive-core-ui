import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  navigations = [];
  constructor() { }

  ngOnInit(): void {
    let paths = window.location.href.split('/');
    console.log(paths);
  }

}
