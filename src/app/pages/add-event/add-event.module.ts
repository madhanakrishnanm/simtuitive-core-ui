import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEventComponent} from './add-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbDatepickerModule, NgbDateStruct, NgbModule, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateFormatterService} from '../../services/date-formatter.service';
@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbDatepickerModule,
    NgbModule
  ],
  providers: [{provide: NgbDateParserFormatter, useClass: DateFormatterService}]

})
export class AddEventModule { }
