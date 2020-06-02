import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {NgbCollapseModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import { BookingCardComponent } from './booking-card/booking-card.component';



@NgModule({
    declarations: [BookingsComponent, BookingCardComponent],
    exports: [
    ],
    imports: [
        CommonModule,
        NgbNavModule,
        NgbCollapseModule,
        NgSelectModule
    ]
})
export class BookingsModule { }
