import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoleComponent } from './edit-role.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EditRoleComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class EditRoleModule { }
