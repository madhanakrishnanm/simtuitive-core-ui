import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPermissionComponent } from './add-permission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [AddPermissionComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class AddPermissionModule { }
