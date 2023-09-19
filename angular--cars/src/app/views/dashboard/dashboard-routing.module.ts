import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/LoginComponent';

const routes: Routes = [{path: '', component:LoginComponent},
{
  path: 'dashboard',
  loadChildren: () => import("src/app/views/dashboard/dashboard-routing.module").then((m) => m.DashboardRoutingModule)
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


