import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('sidebarContent') sidebarContent: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleSidebar(event) {
    let sidebarElement = document.getElementById('sidebar');
    let pageContent = document.getElementById('page-content');
    if (sidebarElement.classList.contains('active')) {
      sidebarElement.classList.remove('active');
      pageContent.classList.remove('active');
    } else {
      sidebarElement.classList.add('active');
      pageContent.classList.add('active');
    }
  }
}
