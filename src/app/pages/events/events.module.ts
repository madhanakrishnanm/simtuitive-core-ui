import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';



@NgModule({
  declarations: [EventsComponent],
    imports: [
        CommonModule,
        AutocompleteLibModule,
    ]
})
export class EventsModule { }
