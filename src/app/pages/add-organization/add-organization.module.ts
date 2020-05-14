import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddOrganizationComponent} from './add-organization.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AddOrganizationComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class AddOrganizationModule {
}
