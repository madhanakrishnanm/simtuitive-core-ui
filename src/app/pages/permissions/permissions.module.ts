import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
@NgModule({
  declarations: [PermissionsComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        RolesModule
    ]
})
export class PermissionsModule { }
