import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
  ]
})
export class EventsModule { }
