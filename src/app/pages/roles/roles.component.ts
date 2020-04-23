import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles = [];

  constructor(public router: Router,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    const payload = {};
    this.roleService.getAllRole(payload).subscribe((res: any) => {
      console.log(res);
      this.roles = res.data;
    });
  }

}
