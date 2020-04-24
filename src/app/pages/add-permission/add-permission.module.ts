import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPermissionComponent } from './add-permission.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AddPermissionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddPermissionModule { }
