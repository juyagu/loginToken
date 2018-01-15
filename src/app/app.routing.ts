import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    {path: '', component:HomeComponent,canActivate:[AuthGuard]},
    {path: 'login',component:LoginComponent},
    
    //Otherwise redirect to home
    {path: '**',redirectTo:''}
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }