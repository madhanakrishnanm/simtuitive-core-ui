import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {PaginationComponent} from '../../components/pagination/pagination.component';
@NgModule({
  declarations: [RolesComponent, PaginationComponent],
  imports: [
    CommonModule,
    NgSelectModule
  ],
  exports: [PaginationComponent],
})
export class RolesModule { }
