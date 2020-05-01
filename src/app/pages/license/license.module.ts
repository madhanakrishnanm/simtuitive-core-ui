import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseComponent } from './license.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {RolesModule} from '../roles/roles.module';
@NgModule({
  declarations: [LicenseComponent],
    imports: [
        CommonModule,
        NgSelectModule,
        RolesModule
    ]
})
export class LicenseModule { }
