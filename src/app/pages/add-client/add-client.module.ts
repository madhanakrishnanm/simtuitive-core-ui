import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {AutocompleteLibModule} from "angular-ng-autocomplete";

@NgModule({
  declarations: [AddClientComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        AutocompleteLibModule
    ]
})
export class AddClientModule { }
