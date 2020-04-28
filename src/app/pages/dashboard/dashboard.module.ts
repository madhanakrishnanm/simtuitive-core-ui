import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        TimeagoModule
    ],
  exports:[]
})
export class DashboardModule { }
