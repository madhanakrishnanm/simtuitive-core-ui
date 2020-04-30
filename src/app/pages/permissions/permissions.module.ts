import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [PermissionsComponent],
    imports: [
        CommonModule,
        NgSelectModule
    ]
})
export class PermissionsModule { }
