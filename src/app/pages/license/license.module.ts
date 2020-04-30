import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseComponent } from './license.component';
import {NgSelectModule} from '@ng-select/ng-select';
@NgModule({
  declarations: [LicenseComponent],
    imports: [
        CommonModule,
        NgSelectModule
    ]
})
export class LicenseModule { }
