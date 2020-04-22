import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [OrganizationsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrganizationsModule { }
