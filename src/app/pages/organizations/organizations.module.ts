import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
import {AutocompleteLibModule} from "angular-ng-autocomplete";
@NgModule({
  declarations: [OrganizationsComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        RolesModule,
        AutocompleteLibModule,
    ]
})
export class OrganizationsModule { }
