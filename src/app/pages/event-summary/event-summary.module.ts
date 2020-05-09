import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSummaryComponent } from './event-summary.component';
import {EventSummaryTableComponent} from '../event-summary-table/event-summary-table.component';
import {EditEventSummaryComponent} from '../edit-event-summary/edit-event-summary.component';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
    declarations: [EventSummaryComponent, EventSummaryTableComponent, EditEventSummaryComponent],
    exports: [
        EventSummaryTableComponent,
        EventSummaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule
    ]
})
export class EventSummaryModule { }
