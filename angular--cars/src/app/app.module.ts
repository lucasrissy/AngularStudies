
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { LoginComponent } from "./views/login/LoginComponent";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AlertService } from './resources/services/alert.service';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
