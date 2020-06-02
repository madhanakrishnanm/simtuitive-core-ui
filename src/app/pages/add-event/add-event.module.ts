import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEventComponent} from './add-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
// tslint:disable-next-line:max-line-length
import {NgbDatepickerModule, NgbDateStruct, NgbModule, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateFormatterService} from '../../services/date-formatter.service';
import {RouterModule} from "@angular/router";
import {NgxSmartModalModule} from "ngx-smart-modal";
@NgModule({
  declarations: [AddEventComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgbDatepickerModule,
        NgbModule,
        RouterModule,
        NgxSmartModalModule,
    ],
  providers: [{provide: NgbDateParserFormatter, useClass: DateFormatterService}]

})
export class AddEventModule { }
