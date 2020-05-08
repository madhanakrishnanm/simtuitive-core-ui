import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles = [];
  deleteRoleId = null;
  page = 1;
  totalPages = 0;
  constructor(public router: Router,
              private roleService: RoleService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getRoles(payload);
  }
  getRoles(payload){
    this.ngxUiLoaderService.start();
    this.roleService.getAllRole(payload).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  requestDelete(roleId, modalReference) {
    this.deleteRoleId = roleId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }

  delete() {
    const payload = {
      roleId: this.deleteRoleId
    };
    console.log(payload);
    this.roleService.deleteRole(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
