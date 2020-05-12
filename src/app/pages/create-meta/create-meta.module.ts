import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateMetaComponent} from './create-meta.component';
import {MetaComponent} from '../meta/meta.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AssessmentDetailsComponent} from '../assessment-details/assessment-details.component';
import {AutocompleteLibModule} from "angular-ng-autocomplete";
@NgModule({
  declarations: [CreateMetaComponent, MetaComponent, AssessmentDetailsComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    AutocompleteLibModule
  ]
})
export class CreateMetaModule { }
