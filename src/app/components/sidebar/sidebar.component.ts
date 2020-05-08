import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebars = [];
  permissions = [];
  selectedSidebar = 'Dashboard';

  constructor(private userService: UsersService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getRouteByName(name) {
    switch (name) {
      case 'Dashboard':
        return '/dashboard';
      case 'Organization Management':
        return '/organizations';
      case 'Client Management':
        return '/clients';
      case 'License Management':
        return '/license';
      case 'Product Management':
        return '/products';
      case 'Event Management':
        return '/events';
      case 'Reports':
        return '/reports';
      case 'Admin Management':
        return '/admins';
      case 'Role Management':
        return '/roles';
      case 'Permission Management':
        return '/permissions';
      case 'WhiteList IPs Management':
        return '/whitelist-ips';
    }
  }
  getNameByRoute(name) {
    const url = window.location.pathname;
    if (url === '/' || url.includes('dashboard')) {
      return 'Dashboard';
    }else if (url.includes('organization')) {
      return 'Organization Management';
    } else if (url.includes('clients')) {
      return 'Client Management';
    } else if (url.includes('license')) {
      return 'License Management';
    } else if (url.includes('products')) {
      return 'Product Management';
    } else if (url.includes('event')) {
      return 'Event Management';
    } else if (url.includes('reports')) {
      return 'Reports';
    }else if (url.includes('admin')) {
      return 'Admin Management';
    }else if (url.includes('role')) {
      return 'Role Management';
    }else if (url.includes('permission')) {
      return 'Permission Management';
    }else if (url.includes('whitelist-ip')) {
      return 'Whitelist IPs Management';
    }
  }
  getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.userService.user = res.data;
      console.log(this.userService.user);
      this.permissions = res.data.permissions;
      if (this.permissions){
        for(const permission of this.permissions){
          if (permission.type === 'tab'){
            this.sidebars.push(permission.name)
          }
        }
      }
      console.log(this.sidebars);
    },error => {
      this.router.navigate(['/login'])
    });
  }
}
