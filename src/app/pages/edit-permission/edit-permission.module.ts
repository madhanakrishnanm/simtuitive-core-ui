import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPermissionComponent } from './edit-permission.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EditPermissionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditPermissionModule { }
