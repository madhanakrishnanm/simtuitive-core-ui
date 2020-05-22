import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLicenseComponent } from './edit-license.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {AutocompleteLibModule} from "angular-ng-autocomplete";



@NgModule({
  declarations: [EditLicenseComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class EditLicenseModule { }
