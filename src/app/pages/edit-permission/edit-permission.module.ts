import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPermissionComponent } from './edit-permission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';



@NgModule({
  declarations: [EditPermissionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectModule
  ]
})
export class EditPermissionModule { }
