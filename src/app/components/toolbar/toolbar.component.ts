import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('sidebarContent') sidebarContent: ElementRef;
  title = 'Close Navigation'
  constructor(public userService: UsersService,
              private toastrService: ToastrService,
              public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public toggleSidebar(event) {
    console.log(event);
    const sidebarElement = document.getElementById('sidebar');
    const pageContent = document.getElementById('page-content');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    if (sidebarElement.classList.contains('active')) {
      this.title = 'Close Navigation';
      sidebarElement.classList.remove('active');
      pageContent.classList.remove('active');
      toggleSidebarBtn.classList.remove('active');
    } else {
      this.title = 'Open Navigation';
      sidebarElement.classList.add('active');
      pageContent.classList.add('active');
      toggleSidebarBtn.classList.add('active');
    }
  }

  logout(){

    this.userService.logout().subscribe((res)=>{
      console.log(res);
      localStorage.clear();
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
      this.toastrService.warning('Something went to be wrong!');
    })

  }
}
