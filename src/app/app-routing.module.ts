import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path:'',
    component : SiteComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'clients', component: ClientsListComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'license', component: LicenseComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'add-client', component: AddClientComponent },
      { path: 'invite-client', component: InviteClientComponent },
      { path: 'edit-client', component: EditClientComponent },
      { path: 'view-client', component: ViewClientComponent },

    ]
  },
  {
    path:'login',
    component : LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
