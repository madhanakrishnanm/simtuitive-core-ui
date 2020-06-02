import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbCollapseModule, NgbDatepickerModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {BookingsModule} from "../bookings/bookings.module";
import { EventCardComponent } from './event-card/event-card.component';
import {NgSelectModule} from "@ng-select/ng-select";
@NgModule({
  declarations: [EventsComponent, EventCardComponent],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbNavModule,
    BookingsModule,
    NgSelectModule,
    NgbCollapseModule,
  ]
})
export class EventsModule { }
