import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNoFoundComponent} from './components/page-no-found/page-no-found.component';
import {RouterModule, Routes} from '@angular/router';

let appRoutes: Routes;
appRoutes = [
  {path: 'auth', component: AuthenticationComponent},
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
