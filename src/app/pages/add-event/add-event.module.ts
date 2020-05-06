import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from './add-event.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AddEventModule { }
