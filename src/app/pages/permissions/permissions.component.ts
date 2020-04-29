import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {PermissionService} from '../../services/permission.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminService} from '../../services/admin.service';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  deleteUserId = null;
  permissions = [];

  constructor(public router: Router,
              private permissionService: PermissionService, private modalService: NgbModal) {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log('modal opened');
  }


  ngOnInit(): void {
    const payload = {};
    this.permissionService.getAllPermission(payload).subscribe((res: any) => {
      console.log(res);
      this.permissions = res.data;
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
    this.permissionService.deletePermission(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
