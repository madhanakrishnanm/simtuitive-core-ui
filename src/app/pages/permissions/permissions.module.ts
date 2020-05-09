import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
import {AutocompleteLibModule} from "angular-ng-autocomplete";
@NgModule({
  declarations: [PermissionsComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        RolesModule,
        AutocompleteLibModule
    ]
})
export class PermissionsModule { }
