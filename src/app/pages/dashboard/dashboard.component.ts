import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import numeral from 'numeral';
import { NgxSmartModalService } from 'ngx-smart-modal';


import {NgxUiLoaderService} from 'ngx-ui-loader';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  role = localStorage.getItem('role') || 'Unknown';
  checked = true;
  public isOpen = false;

  retailUsers: any = {};
  enterpriseUsers: any = {};
  usersOnlineNow: any = {};
  // tslint:disable-next-line:max-line-length
  licenses = [{noOfLicense: 200, creditDate: '1/4/2020', timeOfCredit: '23/3/2020'}, {noOfLicense: 230, creditDate: '1/4/2020', timeOfCredit: '23/3/2020'}];
  productUsers = [];
  admins = [];
  noOfRoles = 0;
  noOfPermissions = 0;
  noOfAdmins = 0;
  response = {
    data: {
      retailUsers: {
        currentMonth: 20244,
        pastMonth: 23455
      },
      enterpriseUsers: {
        currentMonth: 23455,
        pastMonth: 20244
      },
      usersOnlineNow: {
        yesterday: 23455,
        today: 20244
      },
      noOfRoles: 19,
      noOfPermissions: 15,
      noOfAdmins: 5,
      admins: [
        {
          name: 'Admin',
          email: 'admin@gmail.com',
          status: true,
          lastLogedIn: 'now'
        },
        {
          name: 'Mani Maran',
          email: 'manimaran205.mm@gmail.com',
          status: false,
          lastLogedIn: '2020-04-24T10:37:21.316+0000'
        },
        {
          name: 'Veera Mani',
          email: 'veera@gmail.com',
          status: true,
          lastLogedIn: 'now'
        },
        {
          name: 'Mani',
          email: 'mani@gmail.com',
          status: false,
          lastLogedIn: '2020-04-25T10:37:21.316+0000'
        },
        {
          name: 'Test',
          email: 'test@gmail.com',
          status: false,
          lastLogedIn: '2020-04-26T10:37:21.316+0000'
        }
      ]
    }
  };
  constructor(public userService: UsersService,
              public ngxSmartModalService: NgxSmartModalService,
              private ngxUiLoaderService: NgxUiLoaderService,
  ) {
  }

  ngOnInit(): void {
    this.ngxUiLoaderService.start();
    this.getDashboard();
    this.getProductUsers();
    this.getSuperDashboard();
  }
  getSuperDashboard() {
    this.userService.getSuperDashboard().subscribe((res: any) => {
      console.log(res);
    });
  }
  getProductUsers() {
    this.userService.getProductUsers().subscribe((res: any) => {
      this.productUsers = res.data;
      this.ngxUiLoaderService.stop();
      // console.log(this.productUsers);
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }

  getDashboard() {
    this.userService.getUser().subscribe((userRes: any) => {
      const user = userRes.data;
      if (user.role === 'Admin') {
        this.userService.getDashboard().subscribe((res: any) => {
          if (res.data) {
            this.setDashboardForAdmin(res);
          }
        });
      } else if (user.role === 'Super Admin') {
        this.userService.getSuperDashboard().subscribe((res: any) => {
          this.setDashboardForSuperAdmin(res);
        });
      }
    });
    // this.setDashboardForSuperAdmin(this.response);
  }
  setDashboardForAdmin(res) {

    this.retailUsers = res.data.retailUsers;
    this.enterpriseUsers = res.data.enterpriseUsers;
    this.usersOnlineNow = res.data.usersOnlineNow;
    if (this.retailUsers.currentMonth) {
      const tempRetailUsers = this.calculatePercentageFor(this.retailUsers.currentMonth, this.retailUsers.pastMonth);
      this.retailUsers.currentMonth = numeral(this.retailUsers.currentMonth).format('0a');
      this.retailUsers = {...this.retailUsers, ...tempRetailUsers};
      console.log('retail users' + this.retailUsers);
    }
    if (this.enterpriseUsers.currentMonth) {
      const tempEnterpriseUsers = this.calculatePercentageFor(this.enterpriseUsers.currentMonth, this.enterpriseUsers.pastMonth);
      this.enterpriseUsers.currentMonth = numeral(this.enterpriseUsers.currentMonth).format('0a');
      this.enterpriseUsers = {...this.enterpriseUsers, ...tempEnterpriseUsers};
      console.log('retail users' + this.enterpriseUsers);
    }
    if (this.usersOnlineNow.today) {
      const tempUsersOnline = this.calculatePercentageFor(this.usersOnlineNow.today, this.usersOnlineNow.yesterday);
      this.usersOnlineNow.today = numeral(this.usersOnlineNow.today).format('0a');
      this.usersOnlineNow = {...this.usersOnlineNow, ...tempUsersOnline};
      console.log('usersonline today' + this.usersOnlineNow);
    }
    console.log(res);
  }
  setDashboardForSuperAdmin(res) {
    this.noOfAdmins = res.data.Admin;
    this.noOfRoles = res.data.Role;
    this.noOfPermissions = res.data.Permission;
    // tslint:disable-next-line:no-shadowed-variable
    this.userService.getAdminUsers().subscribe((res: any) => {
      console.log(res);
      this.admins = res.data;
    });
    //
    // console.log('Admins'+this.admins[0].name);
  }
  calculatePercentageFor(current, past) {
    let percentage = 0;
    let typeOfValue = 0;
    current = parseInt(current);
    past = parseInt(past);
    percentage = ((past - current) / past) * 100;
    console.log(percentage);
    if (percentage > 0) {
      typeOfValue = 1;
    }
    percentage = numeral(Math.abs(percentage)).format('0.0');
    return {
      percentage,
      typeOfValue
    };
  }

  toggleTheme() {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    this.checked = !this.checked;
  }

}
