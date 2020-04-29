import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClientComponent } from './edit-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [EditClientComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class EditClientModule { }
