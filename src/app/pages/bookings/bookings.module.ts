import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {NgbCollapseModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { EventCardComponent } from './event-card/event-card.component';
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
  declarations: [BookingsComponent, EventCardComponent],
    imports: [
        CommonModule,
        NgbNavModule,
        NgbCollapseModule,
        NgSelectModule
    ]
})
export class BookingsModule { }
