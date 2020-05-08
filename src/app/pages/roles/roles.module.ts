import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [RolesComponent, PaginationComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        FormsModule
    ],
  exports: [PaginationComponent],
})
export class RolesModule { }
