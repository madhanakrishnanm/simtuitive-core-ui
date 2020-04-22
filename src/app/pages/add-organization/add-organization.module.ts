import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddOrganizationComponent} from './add-organization.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddOrganizationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddOrganizationModule {
}
