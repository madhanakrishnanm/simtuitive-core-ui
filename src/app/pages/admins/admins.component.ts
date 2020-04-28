import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  closeResult = '';
  admins = [];
  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private adminService: AdminService,private modalService: NgbModal) { }
          
              open(content) {
                this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
              }
          

  ngOnInit(): void {
    const payload = {};
    this.adminService.getAllAdmin(payload).subscribe((res: any) => {
      console.log(res);
      this.admins = res.data;
    });
  }
  delete(userId){
    let payload = {
      userId
    };
    console.log(payload);
    this.adminService.deleteAdmin(payload).subscribe((res: any)=>{
      console.log(res);
      window.location.reload();
    })
  }

}
