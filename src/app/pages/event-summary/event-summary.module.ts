import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSummaryComponent } from './event-summary.component';
import {EventSummaryTableComponent} from '../event-summary-table/event-summary-table.component';
import {EditEventSummaryComponent} from '../edit-event-summary/edit-event-summary.component';



@NgModule({
  declarations: [EventSummaryComponent, EventSummaryTableComponent, EditEventSummaryComponent],
  imports: [
    CommonModule
  ]
})
export class EventSummaryModule { }
