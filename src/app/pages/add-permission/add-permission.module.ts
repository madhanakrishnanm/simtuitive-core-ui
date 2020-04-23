import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPermissionComponent } from './add-permission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';



@NgModule({
  declarations: [AddPermissionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule
  ]
})
export class AddPermissionModule { }
