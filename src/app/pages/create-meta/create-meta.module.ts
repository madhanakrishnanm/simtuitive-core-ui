import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateMetaComponent} from './create-meta.component';
import {MetaComponent} from '../meta/meta.component';
import {NgSelectModule} from '@ng-select/ng-select';
@NgModule({
  declarations: [CreateMetaComponent, MetaComponent],
  imports: [
    CommonModule,
    NgSelectModule
  ]
})
export class CreateMetaModule { }
