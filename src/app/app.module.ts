import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from './pages/login/login.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {OrganizationsModule} from './pages/organizations/organizations.module';
import {AddOrganizationModule} from './pages/add-organization/add-organization.module';
import {EditOrganizationModule} from './pages/edit-organization/edit-organization.module';
import {ClientsListModule} from './pages/clients-list/clients-list.module';
import {EditClientModule} from './pages/edit-client/edit-client.module';
import {AddClientModule} from './pages/add-client/add-client.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SiteComponent} from './layouts/site/site.component';
import {AuthComponent} from './layouts/auth/auth.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestComponent} from './pages/test/test.component';
import {AdminsModule} from './pages/admins/admins.module';
import {AddAdminModule} from './pages/add-admin/add-admin.module';
import {EditAdminModule} from './pages/edit-admin/edit-admin.module';
import {RolesModule} from './pages/roles/roles.module';
import {AddRoleModule} from './pages/add-role/add-role.module';
import {EditRoleModule} from './pages/edit-role/edit-role.module';
import {PermissionsModule} from './pages/permissions/permissions.module';
import {AddPermissionModule} from './pages/add-permission/add-permission.module';
import {EditPermissionModule} from './pages/edit-permission/edit-permission.module';
import {NgSelectModule} from '@ng-select/ng-select';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import {LicenseModule} from './pages/license/license.module';
import {AddLicenseModule} from './pages/add-license/add-license.module';
import {AddEventModule} from './pages/add-event/add-event.module';
import {ViewEventsModule} from './pages/view-events/view-events.module';
import {EventSummaryModule} from './pages/event-summary/event-summary.module';
import { EditEventComponent } from './pages/edit-event/edit-event.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsModule} from './pages/products/products.module';
import {EventsModule} from "./pages/events/events.module";
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SiteComponent,
    AuthComponent,
    SidebarComponent,
    TestComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LicenseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxUiLoaderModule,
    LoginModule,
    DashboardModule,
    OrganizationsModule,
    EventsModule,
    ViewEventsModule,
    AddOrganizationModule,
    EditOrganizationModule,
    ClientsListModule,
    EditClientModule,
    AddClientModule,
    AddLicenseModule,
    AddEventModule,
    AdminsModule,
    AddAdminModule,
    EditAdminModule,
    RolesModule,
    AddRoleModule,
    EditRoleModule,
    ProductsModule,
    PermissionsModule,
    AddPermissionModule,
    EditPermissionModule,
    EventSummaryModule,
    NgSelectModule,
    TimeagoModule,
    NgbModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
