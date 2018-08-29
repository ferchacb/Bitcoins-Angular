import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { InfoExtraccionService } from './info-extraccion/info-extraccion.service';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MonedaComponent } from './moneda/moneda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CripUTNComponent } from './crip-utn/crip-utn.component';

const appRoutes: Routes = [
  {path: 'moneda',component: MonedaComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'crip-utn',component: CripUTNComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonedaComponent,
    DashboardComponent,
    CripUTNComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,ChartsModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [InfoExtraccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
