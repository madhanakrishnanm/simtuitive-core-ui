import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  closeResult = '';
  adminNames = [];
  admins = [];
  page = 1;
  totalPages = 0;
  deleteUserId = null;

  constructor(public router: Router,
              private formBuilder: FormBuilder,
              private adminService: AdminService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private modalService: NgbModal
  ) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getAdmins(payload);

  }
  getAdmins(payload) {
    this.ngxUiLoaderService.start();
    this.adminService.getAllAdmin(payload).subscribe((res: any) => {
      console.log(res);
      this.admins = res.data;
      // for  Import data For AutoComplete
      for (const[index, admin] of this.admins.entries()) {
        this.adminNames.push(admin.userName);
      }
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {

      this.ngxUiLoaderService.stop();

    });
  }


  requestDelete(userId, modalReference) {
    this.deleteUserId = userId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }

  delete() {
    const payload = {
      userId: this.deleteUserId
    };
    console.log(payload);
    this.adminService.deleteAdmin(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

}
