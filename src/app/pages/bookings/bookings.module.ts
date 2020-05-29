import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [BookingsComponent, EventCardComponent],
    imports: [
        CommonModule,
        NgbNavModule
    ]
})
export class BookingsModule { }
