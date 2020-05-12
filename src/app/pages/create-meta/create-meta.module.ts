import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateMetaComponent} from './create-meta.component';
import {MetaComponent} from '../meta/meta.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AssessmentDetailsComponent} from '../assessment-details/assessment-details.component';
import { ModulesComponent } from './modules/modules.component';
import { ConceptsComponent } from './concepts/concepts.component';
import {AutocompleteLibModule} from "angular-ng-autocomplete";
@NgModule({
  declarations: [CreateMetaComponent, MetaComponent, AssessmentDetailsComponent, ModulesComponent, ConceptsComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    AutocompleteLibModule
  ]
})
export class CreateMetaModule { }
