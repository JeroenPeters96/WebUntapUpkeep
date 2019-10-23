import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';

const routes: Route[] = [
  {path: 'auth', component: AuthenticationComponent},
  {path: '404 ', component: PageNotFoundComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

