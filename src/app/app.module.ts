import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNoFoundComponent} from './components/page-no-found/page-no-found.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PageNoFoundComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
