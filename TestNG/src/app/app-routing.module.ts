import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'} ,
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
