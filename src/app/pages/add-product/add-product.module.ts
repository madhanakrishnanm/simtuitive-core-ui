import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProductComponent} from './add-product.component';
import {MetaComponent} from './meta/meta.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AssessmentDetailsComponent} from './assessment-details/assessment-details.component';
import { ModulesComponent } from './modules/modules.component';
import { ConceptsComponent } from './concepts/concepts.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [AddProductComponent, MetaComponent, AssessmentDetailsComponent, ModulesComponent, ConceptsComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    AutocompleteLibModule,
    NgbButtonsModule,
    FormsModule
  ]
})
export class AddProductModule { }
