import { NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNoFoundComponent} from './components/page-no-found/page-no-found.component';
import {HomeComponent} from './components/home/home.component';

const routes: Route[] = [
  {path: 'auth', component: AuthenticationComponent},
  {path: '404 ', component: PageNoFoundComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }

