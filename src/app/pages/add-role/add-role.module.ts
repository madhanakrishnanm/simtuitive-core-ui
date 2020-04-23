import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AddRoleComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AddRoleModule { }
