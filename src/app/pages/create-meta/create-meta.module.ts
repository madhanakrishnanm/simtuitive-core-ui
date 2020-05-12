import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMetaComponent } from './create-meta.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {MetaComponent} from '../meta/meta.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [CreateMetaComponent, MetaComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ]
})
export class CreateMetaModule { }
