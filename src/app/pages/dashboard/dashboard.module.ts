import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AppModule} from '../../app.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@NgModule({
  declarations: [DashboardComponent,SidebarComponent],
  imports: [
    CommonModule,
  ],
  exports:[SidebarComponent]
})
export class DashboardModule { }
