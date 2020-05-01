import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins.component';
import {RolesModule} from '../roles/roles.module';
import {PaginationComponent} from '../../components/pagination/pagination.component';
@NgModule({
  declarations: [AdminsComponent],
    imports: [
        CommonModule,
        RolesModule
    ]
})
export class AdminsModule { }
