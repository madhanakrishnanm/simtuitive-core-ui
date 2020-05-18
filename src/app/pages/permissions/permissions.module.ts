import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
import {AutocompleteLibModule} from "angular-ng-autocomplete";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [PermissionsComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        RolesModule,
        AutocompleteLibModule,
        FormsModule
    ]
})
export class PermissionsModule { }
