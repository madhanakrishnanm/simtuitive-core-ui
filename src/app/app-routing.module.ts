import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteComponent} from './layouts/site/site.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ClientsListComponent} from './pages/clients-list/clients-list.component';
import {ProductsComponent} from './pages/products/products.component';
import {LicenseComponent} from './pages/license/license.component';
import {AddLicenseComponent} from './pages/add-license/add-license.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {AddClientComponent} from './pages/add-client/add-client.component';
import {EditClientComponent} from './pages/edit-client/edit-client.component';
import {ViewClientComponent} from './pages/view-client/view-client.component';
import {InviteClientComponent} from './pages/invite-client/invite-client.component';
import {OrganizationsComponent} from './pages/organizations/organizations.component';
import {AddOrganizationComponent} from './pages/add-organization/add-organization.component';
import {EditLicenseComponent} from './pages/edit-license/edit-license.component';
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

import {EventsComponent} from './pages/events/events.component';
import {AddEventComponent} from './pages/add-event/add-event.component';
import {EditEventComponent} from './pages/edit-event/edit-event.component';
import {BookingsComponent} from './pages/bookings/bookings.component';
import {AddProductComponent} from './pages/add-product/add-product.component';
import {ViewLicenseComponent} from './pages/view-license/view-license.component';
const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'clients', component: ClientsListComponent},
      {path: 'clients/add-client', component: AddClientComponent},
      {path: 'clients/edit-client/:id', component: EditClientComponent},
      {path: 'clients/invite-client', component: InviteClientComponent},
      {path: 'clients/view-client', component: ViewClientComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/add-product', component: AddProductComponent},
      {path: 'licenses', component: LicenseComponent},
      {path: 'licenses/add-license', component: AddLicenseComponent},
      {path: 'licenses/edit-license/:id', component: EditLicenseComponent},
      {path: 'licenses/view-license/:id', component: ViewLicenseComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'organizations', component: OrganizationsComponent},
      {path: 'organizations/add-organization', component: AddOrganizationComponent},
      {path: 'organizations/edit-organization/:id', component: EditOrganizationComponent},
      {path: 'admins', component: AdminsComponent},
      {path: 'admins/add-admin', component: AddAdminComponent},
      {path: 'admins/edit-admin/:id', component: EditAdminComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'roles/add-role', component: AddRoleComponent},
      {path: 'roles/edit-role/:id', component: EditRoleComponent},
      {path: 'permissions', component: PermissionsComponent},
      {path: 'permissions/add-permission', component: AddPermissionComponent},
      {path: 'permissions/edit-permission/:id', component: EditPermissionComponent},
      {path: 'whitelist-ips', component: WhitelistIpsComponent},
      {path: 'test', component: TestComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'events/add-event', component: AddEventComponent},
      {path: 'events/edit-event/:id', component: EditEventComponent},
      {path: 'events', component: EventsComponent},

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
