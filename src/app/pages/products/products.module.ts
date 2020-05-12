import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule} from '@angular/router';
import {CreateMetaModule} from '../create-meta/create-meta.module';
import {NgSelectModule} from '@ng-select/ng-select';
@NgModule({
  declarations: [ProductsComponent],
    imports: [
        CommonModule,
        RouterModule,
        CreateMetaModule,
        NgSelectModule
    ]
})
export class ProductsModule { }
