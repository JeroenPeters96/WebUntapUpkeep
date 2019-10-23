import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationComponent} from './components/authentication/authentication.component';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UnTapNavComponent} from './components/un-tap-nav/un-tap-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DeckComponent} from './components/deck/deck.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PageNotFoundComponent,
    HomeComponent,
    UnTapNavComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
