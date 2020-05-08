import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEventsComponent } from './view-events.component';
import {EventSummaryTableComponent} from '../event-summary-table/event-summary-table.component';



@NgModule({
  declarations: [ViewEventsComponent],
  imports: [
    CommonModule,
  ]
})
export class ViewEventsModule { }
