import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLicenseComponent } from './add-license.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AddLicenseComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class AddLicenseModule { }
