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
    AddOrganizationModule,
    EditOrganizationModule,
    ClientsListModule,
    EditClientModule,
    AddClientModule,
    AddLicenseModule,
    AdminsModule,
    AddAdminModule,
    EditAdminModule,
    RolesModule,
    AddRoleModule,
    EditRoleModule,
    PermissionsModule,
    AddPermissionModule,
    EditPermissionModule,
    NgSelectModule,
    TimeagoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
