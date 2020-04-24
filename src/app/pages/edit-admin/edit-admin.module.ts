import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './edit-admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [EditAdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class EditAdminModule { }
