import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEventComponent} from './add-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
// tslint:disable-next-line:max-line-length
import {NgbDatepickerModule, NgbDateStruct, NgbModule, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateFormatterService} from '../../services/date-formatter.service';
import {CreateEventComponent} from '../create-event/create-event.component';
import {EventSummaryModule} from '../event-summary/event-summary.module';
import {EventDownloadComponent} from '../event-download/event-download.component';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [AddEventComponent, CreateEventComponent, EventDownloadComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgbDatepickerModule,
        NgbModule,
        EventSummaryModule,
        RouterModule,
    ],
  providers: [{provide: NgbDateParserFormatter, useClass: DateFormatterService}]

})
export class AddEventModule { }
