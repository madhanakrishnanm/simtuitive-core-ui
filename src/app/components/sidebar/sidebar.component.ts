import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebars = [];
  selectedSidebar = 'Dashboard'

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getRouteByName(name){
    switch (name) {
      case 'Dashboard':
        return '/dashboard';
      case 'Client Management':
        return '/clients';
      case 'License Management':
        return '/license';
      case 'Product Management':
        return '/products';
      case 'Reports':
        return '/reports';
    }
  }
  getNameByRoute(name){
    const url = window.location.pathname;
    console.log(url);
    if (url === '/' || url.includes('dashboard')) {
      return 'Dashboard';
    } else if (url.includes('clients')) {
      return 'Client Management';
    } else if (url.includes('license')) {
      return 'License Management';
    } else if (url.includes('products')) {
      return 'Product Management';
    } else if (url.includes('reports')) {
      return 'Reports';
    }
  }
  getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.sidebars = res.data.permissions[0].tabs;
      console.log(this.sidebars);
    });
  }
}
