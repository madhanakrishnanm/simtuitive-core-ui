import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  role = localStorage.getItem('role') || "Unknown";
  constructor() { }

  ngOnInit(): void {
  }

}
