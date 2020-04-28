import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';
import {PermissionService} from '../../services/permission.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  permissions = [];

  constructor(public router: Router,
              private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    const payload = {};
    this.permissionService.getAllPermission(payload).subscribe((res: any) => {
      console.log(res);
      this.permissions = res.data;
    });
  }
  delete(roleId){
    let payload = {
      roleId
    };
    console.log(payload);
    this.permissionService.deletePermission(payload).subscribe((res: any)=>{
      console.log(res);
      window.location.reload();
    })
  }
}
