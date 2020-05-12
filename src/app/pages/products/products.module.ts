import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule} from '@angular/router';
import {CreateMetaComponent} from '../create-meta/create-meta.component';



@NgModule({
  declarations: [ProductsComponent, CreateMetaComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ProductsModule { }
