import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  sidebars = [];
  permissions = [];
  eventSubBars = [];
  selectedSidebar = 'Dashboard';

  constructor(private userService: UsersService,
              public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  ngAfterViewInit() {
   /* let path = window.location.pathname;
    if (path === '/events' || path === '/events/bookings'){
      setTimeout(()=>{
        this.showCollapse('Event Management')
      },1000)
    }*/
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
        return '/licenses';
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
      case 'Events':
        return '/events';
      case 'Bookings':
        return '/events/bookings';
    }
  }
  getNameByRoute(name) {
    const url = window.location.pathname;
    // console.log(url);
    if (url === '/' || url.includes('dashboard')) {
      return 'Dashboard';
    } else if (url.includes('organization')) {
      return 'Organization Management';
    } else if (url.includes('clients')) {
      return 'Client Management';
    } else if (url.includes('license')) {
      return 'License Management';
    } else if (url.includes('products')) {
      return 'Product Management';
    } else if (url === '/events') {
      return 'Events';
    } else if (url === '/events/bookings') {
      return 'Bookings';
    }else if (url.includes('reports')) {
      return 'Reports';
    } else if (url.includes('admin')) {
      return 'Admin Management';
    } else if (url.includes('role')) {
      return 'Role Management';
    } else if (url.includes('permission')) {
      return 'Permission Management';
    } else if (url.includes('whitelist-ip')) {
      return 'Whitelist IPs Management';
    }else if (url.includes('bookings')) {
      return 'Bookings';
    }
  }
  getUser() {
    this.userService.getUser().subscribe((res: any) => {
      this.userService.user = res.data;
      console.log(this.userService.user);
      this.permissions = res.data.permissions;
      if (this.permissions) {
        for (const permission of this.permissions) {
          if (permission.type === 'tab') {
            this.sidebars.push(permission.name);
          }
          if (permission.type === 'EventSubTab'){
            this.eventSubBars.push(permission.name)
          }
        }
      }
      console.log(this.sidebars);
      console.log(this.eventSubBars);
    }, error => {
      this.router.navigate(['/login']);
    });
  }
  toggleCollapse(elementId, redirect){
    console.log('called');
    let element = document.getElementById(elementId);
    console.log(element.classList)
    if (element.classList.contains('show')){
      element.classList.remove('show');
    }else {
      element.classList.add('show');
    }
    this.router.navigate([this.getRouteByName(redirect)])
  }
  hideCollapse(name){
    let path = this.router.url;
    let eventElement = document.getElementById('eventSubmenu');
    if (name !== 'Event Management'){
      eventElement.classList.remove('show');
    }else {
      eventElement.classList.add('show');
    }
  }
  showCollapse(name){
    let eventElement = document.getElementById('eventSubmenu');
    if (name === 'Event Management'){
      eventElement.classList.add('show');
    }
  }
}
