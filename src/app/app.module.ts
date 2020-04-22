import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SelectModule} from 'ng-select';
import {LoginModule} from './pages/login/login.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {OrganizationsModule} from './pages/organizations/organizations.module';
import {AddOrganizationModule} from './pages/add-organization/add-organization.module';
import {EditOrganizationModule} from './pages/edit-organization/edit-organization.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SiteComponent } from './layouts/site/site.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SiteComponent,
    AuthComponent,
    SidebarComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoginModule,
    DashboardModule,
    SelectModule,
    OrganizationsModule,
    AddOrganizationModule,
    EditOrganizationModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
