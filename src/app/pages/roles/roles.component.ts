import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles = [];
  deleteRoleId = null;
  constructor(public router: Router,
              private roleService: RoleService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    const payload = {};
    this.roleService.getAllRole(payload).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
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
