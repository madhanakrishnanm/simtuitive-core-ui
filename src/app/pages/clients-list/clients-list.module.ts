import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
@NgModule({
  declarations: [ClientsListComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    RolesModule
  ]
})
export class ClientsListModule { }
