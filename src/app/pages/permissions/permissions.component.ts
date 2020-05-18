import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PermissionService} from '../../services/permission.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  deletePermissionId = null;
  permissions = [];
  permissionTypes = [];
  permissionRoles = [];
  selectedType = null;
  selectedRole = null;
  searchQuery = null;
  page = 1;
  totalPages = 0;

  constructor(public router: Router,
              private permissionService: PermissionService,
              private roleService: RoleService,
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
      pageno: this.page - 1,
    };
    this.getPermissions(payload);
   this.getPermissionTypes({});
   this.getPermissionRoles({});

  }
  getPermissionTypes(payload){
    this.permissionService.findPermissionType(payload).subscribe((res: any) => {
      console.log(res);
      this.permissionTypes = res.data;
    })
  }
  getPermissionRoles(payload){
    this.roleService.getAllRole(payload).subscribe((res: any) => {
      // console.log(res);
      this.permissionRoles = res.data;
      console.log('roles');
      console.log(this.permissionRoles);
    })
  }
  getPermissions(payload){

    payload['query'] = this.searchQuery;
    payload['type'] = this.selectedType;
    payload['roleName'] = this.selectedRole? this.selectedRole.roleName: null;

    this.ngxUiLoaderService.start();
    this.permissionService.getAllPermission(payload).subscribe((res: any) => {
      this.permissions = res.data;
      console.log(this.permissions);
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });
  }
  searchPermission(event){
    this.searchQuery = event.target.value;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery
    };
    this.getPermissions(payload);
  }
  onTypeChange(event){
    this.selectedType = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      type: this.selectedType,
      roleName: this.selectedRole? this.selectedRole.roleName: null
    };
    this.getPermissions(payload);
  }
  onRoleChange(event){
    this.selectedRole = event;
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      type: this.selectedType,
      roleName: this.selectedRole? this.selectedRole.roleName: null
    };
    this.getPermissions(payload);
  }
  applyFilter(){
    const payload = {
      pageNo: this.page - 1,
      query: this.searchQuery,
      type: this.selectedType,
      roleName: this.selectedRole? this.selectedRole.roleName: null
    };
    console.log(payload);
    this.getPermissions(payload);
  }
  requestDelete(PermissionId, modalReference) {
    this.deletePermissionId = PermissionId;
    this.modalService.open(modalReference, {centered: true, size: 'sm', windowClass: 'simtuitive-modal'});
  }

  delete() {
    const payload = {
      permissionId: this.deletePermissionId
    };
    console.log(payload);
    this.permissionService.deletePermission(payload).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
}
