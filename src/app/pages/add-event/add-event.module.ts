import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEventComponent} from './add-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbDatepickerModule,
    NgbModule
  ]
})
export class AddEventModule { }
