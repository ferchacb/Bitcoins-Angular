import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CripUTNComponent} from '../crip-utn/crip-utn.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MonedaComponent} from '../moneda/moneda.component';



const routes: Routes = [
  {path: 'crip-utn', component: CripUTNComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'moneda', component: MonedaComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
