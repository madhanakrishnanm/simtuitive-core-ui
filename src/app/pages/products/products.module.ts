import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule} from '@angular/router';
import {AddProductModule} from '../add-product/add-product.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {RolesModule} from '../roles/roles.module';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AddProductModule,
    NgSelectModule,
    AutocompleteLibModule,
    RolesModule
  ]
})
export class ProductsModule { }
