import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  navigations = [];
  constructor(public router: Router) { }

  ngOnInit(): void {
    let paths = this.router.url.split('/');
    this.splitUrlIntoNavigations(paths);
    console.log(this.navigations);
    console.log(paths);

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.navigations = [];
        let paths = event.url.split('/')
        this.splitUrlIntoNavigations(paths);
        console.log(this.navigations);
        console.log(paths);
      }
    });
  }
  splitUrlIntoNavigations(paths){
    paths.forEach((path) => {
      let breadCrumb = this.getRoutePathAndName(path);
      if (!this.containsObject(breadCrumb, this.navigations)){
        this.navigations.push(breadCrumb);
      }
    });
  }
  containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i]['path'] == obj['path']) {
        return true;
      }
    }
    return false;
  }
  getRoutePathAndName(url){
    let route = {};
    switch (url) {
      case '':
        route['name'] = 'Home';
        route['path'] = '/';
        break;
      case '/':
        route['name'] = 'Home';
        route['path'] = '/';
        break;
      case 'organizations':
        route['name'] = 'Organizations';
        route['path'] = 'organizations';
        break;
      case 'add-organization':
        route['name'] = 'Add Organization';
        route['path'] = 'organizations/add-organization';
        break;
      case 'edit-organization':
        route['name'] = 'Edit Organization';
        route['path'] = 'organizations/edit-organization';
        break;
      case 'clients':
        route['name'] = 'Clients';
        route['path'] = 'clients';
        break;
      case 'add-client':
        route['name'] = 'Add Client';
        route['path'] = 'clients/add-client';
        break;
      case 'edit-client':
        route['name'] = 'Edit Client';
        route['path'] = 'clients/edit-client';
        break;
      case 'products':
        route['name'] = 'Products';
        route['path'] = 'products';
        break;
      case 'add-product':
        route['name'] = 'Add Product';
        route['path'] = 'products/add-product';
        break;
      case 'licenses':
        route['name'] = 'Licenses';
        route['path'] = 'licenses';
        break;
      case 'add-license':
        route['name'] = 'Add License';
        route['path'] = 'licenses/add-license';
        break;
      case 'edit-license':
        route['name'] = 'Edit License';
        route['path'] = 'licenses/edit-license';
        break;
      case 'view-license':
        route['name'] = 'View License';
        route['path'] = 'licenses/view-license';
        break;
      case 'admins':
        route['name'] = 'Admins';
        route['path'] = 'admins';
        break;
      case 'add-admin':
        route['name'] = 'Admins';
        route['path'] = 'admins/add-admin';
        break;
      case 'edit-admin':
        route['name'] = 'Admins';
        route['path'] = 'admins/edit-admin';
        break;
      case 'roles':
        route['name'] = 'Roles';
        route['path'] = 'roles';
        break;
      case 'add-role':
        route['name'] = 'Add Role';
        route['path'] = 'roles/add-role';
        break;
      case 'edit-role':
        route['name'] = 'Edit Role';
        route['path'] = 'roles/edit-role';
        break;
      case 'permissions':
        route['name'] = 'Permissions';
        route['path'] = 'permissions';
        break;
      case 'add-permission':
        route['name'] = 'Add Permission';
        route['path'] = 'add-permission';
        break;
      case 'edit-permission':
        route['name'] = 'Edit Permission';
        route['path'] = 'edit-permission';
        break;

    }
    return route;

  }

}
