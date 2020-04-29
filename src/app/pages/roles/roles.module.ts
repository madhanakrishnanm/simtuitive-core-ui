import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [RolesComponent],
    imports: [
        CommonModule,
        NgSelectModule
    ]
})
export class RolesModule { }
