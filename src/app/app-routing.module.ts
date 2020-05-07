import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteComponent} from './layouts/site/site.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ClientsListComponent} from './pages/clients-list/clients-list.component';
import {ProductsComponent} from './pages/products/products.component';
import {LicenseComponent} from './pages/license/license.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {AddClientComponent} from './pages/add-client/add-client.component';
import {EditClientComponent} from './pages/edit-client/edit-client.component';
import {ViewClientComponent} from './pages/view-client/view-client.component';
import {InviteClientComponent} from './pages/invite-client/invite-client.component';
import {OrganizationsComponent} from './pages/organizations/organizations.component';
import {AddOrganizationComponent} from './pages/add-organization/add-organization.component';
import {EditOrganizationComponent} from './pages/edit-organization/edit-organization.component';
import {AdminsComponent} from './pages/admins/admins.component';
import {AddAdminComponent} from './pages/add-admin/add-admin.component';
import {EditAdminComponent} from './pages/edit-admin/edit-admin.component';
import {RolesComponent} from './pages/roles/roles.component';
import {AddRoleComponent} from './pages/add-role/add-role.component';
import {EditRoleComponent} from './pages/edit-role/edit-role.component';
import {PermissionsComponent} from './pages/permissions/permissions.component';
import {AddPermissionComponent} from './pages/add-permission/add-permission.component';
import {EditPermissionComponent} from './pages/edit-permission/edit-permission.component';
import {WhitelistIpsComponent} from './pages/whitelist-ips/whitelist-ips.component';
import {TestComponent} from './pages/test/test.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './pages/update-password/update-password.component';
import {AddLicenseComponent} from './pages/add-license/add-license.component';
import {AddEventComponent} from './pages/add-event/add-event.component';
import {EventSummaryComponent} from './pages/event-summary/event-summary.component';


const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'clients', component: ClientsListComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'license', component: LicenseComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'add-client', component: AddClientComponent},
      {path: 'invite-client', component: InviteClientComponent},
      {path: 'edit-client/:id', component: EditClientComponent},
      {path: 'view-client', component: ViewClientComponent},
      {path: 'organizations', component: OrganizationsComponent},
      {path: 'add-organization', component: AddOrganizationComponent},
      {path: 'edit-organization/:id', component: EditOrganizationComponent},
      {path: 'admins', component: AdminsComponent},
      {path: 'add-admin', component: AddAdminComponent},
      {path: 'edit-admin/:id', component: EditAdminComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'add-role', component: AddRoleComponent},
      {path: 'edit-role/:id', component: EditRoleComponent},
      {path: 'permissions', component: PermissionsComponent},
      {path: 'add-permission', component: AddPermissionComponent},
      {path: 'edit-permission/:id', component: EditPermissionComponent},
      {path: 'whitelist-ips', component: WhitelistIpsComponent},
      {path: 'add-license', component: AddLicenseComponent},
      {path: 'test', component: TestComponent},
      {path: 'events', component: AddEventComponent},
      {path: 'event-summary', component: EventSummaryComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
