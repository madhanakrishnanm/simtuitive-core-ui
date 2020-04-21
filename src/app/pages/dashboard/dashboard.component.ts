import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import numeral from 'numeral'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  role = localStorage.getItem('role') || 'Unknown';
  checked = true;
  public isOpen: boolean = false;

  retailUsers: any = {};
  enterpriseUsers: any = {};
  usersOnlineNow: any = {};
  productUsers = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getDashboard();
    this.getProductUsers();
  }

  getProductUsers() {
    this.userService.getProductUsers().subscribe((res: any) => {
      this.productUsers = res.data;
      console.log(this.productUsers);
    });
  }

  getDashboard() {
    this.userService.getDashboard().subscribe((res: any) => {
      this.retailUsers = res.data.retailUsers;
      this.enterpriseUsers = res.data.enterpriseUsers;
      this.usersOnlineNow = res.data.usersOnlineNow;
      if (this.retailUsers.currentMonth) {
        let tempRetailUsers = this.calculatePercentageFor(this.retailUsers.currentMonth,this.retailUsers.pastMonth)
        this.retailUsers.currentMonth = numeral(this.retailUsers.currentMonth).format('0a')
        this.retailUsers = {...this.retailUsers, ...tempRetailUsers}
        console.log(this.retailUsers);
      }
      if (this.enterpriseUsers.currentMonth) {
        let tempEnterpriseUsers = this.calculatePercentageFor(this.enterpriseUsers.currentMonth,this.enterpriseUsers.pastMonth)
        this.enterpriseUsers.currentMonth = numeral(this.enterpriseUsers.currentMonth).format('0a')
        this.enterpriseUsers = {...this.enterpriseUsers, ...tempEnterpriseUsers}
        console.log(this.enterpriseUsers);
      }
      if (this.usersOnlineNow.today) {
        let tempUsersOnline = this.calculatePercentageFor(this.usersOnlineNow.today,this.usersOnlineNow.yesterday)
        this.usersOnlineNow.today = numeral(this.usersOnlineNow.today).format('0a')
        this.usersOnlineNow = {...this.usersOnlineNow, ...tempUsersOnline}
        console.log(this.usersOnlineNow);
      }


      console.log(res);
    });
  }

  calculatePercentageFor(current,past){
    let percentage = 0;
    let typeOfValue = 0;
    current = parseInt(current);
    past = parseInt(past);
    percentage = ((past - current) /past) * 100;
    console.log(percentage)
    if (percentage > 0){
      typeOfValue = 1;
    }
    percentage = numeral(Math.abs(percentage)).format('0.0');
    return {
      percentage,
      typeOfValue
    }
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
