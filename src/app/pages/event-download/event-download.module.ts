import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDownloadComponent } from './event-download.component';
import {EventSummaryTableComponent} from "../event-summary-table/event-summary-table.component";



@NgModule({
  declarations: [EventDownloadComponent, EventSummaryTableComponent],
  exports: [
    EventDownloadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventDownloadModule { }
