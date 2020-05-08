import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {PermissionService} from '../../services/permission.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminService} from '../../services/admin.service';
import {NgxUiLoaderService} from "ngx-ui-loader";
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  deletePermissionId = null;
  permissions = [];
  permissionTypes = [];
  page = 1;
  totalPages = 0;
  constructor(public router: Router,
              private permissionService: PermissionService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private modalService: NgbModal
  ) {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log('modal opened');
  }


  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getPermissions(payload);

  }
  getPermissions(payload){
    this.ngxUiLoaderService.start();
    this.permissionService.getAllPermission(payload).subscribe((res: any) => {
      console.log(res);
      this.permissions = res.data;
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  requestDelete(PermissionId, modalReference) {
    this.deletePermissionId = PermissionId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }

  delete() {
    const payload = {
      PermissionId: this.deletePermissionId
    };
    console.log(payload);
    this.permissionService.deletePermission(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
