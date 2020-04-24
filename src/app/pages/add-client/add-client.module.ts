import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddClientModule { }
