import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditOrganizationComponent } from './edit-organization.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EditOrganizationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditOrganizationModule { }
