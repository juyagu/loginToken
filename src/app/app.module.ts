import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/index';
import { AuthGuard } from './_guards/index';
import { JwtHelper } from 'angular2-jwt';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    JwtHelper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
