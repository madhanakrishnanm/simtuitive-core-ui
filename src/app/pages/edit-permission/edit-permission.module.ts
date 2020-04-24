import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPermissionComponent } from './edit-permission.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [EditPermissionComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class EditPermissionModule { }
