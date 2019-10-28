import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationComponent} from './components/authentication/authentication.component';

import {AppRouting} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UntapLayoutComponent} from './components/untap-layout/untap-layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DeckComponent} from './components/deck/deck.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CardService} from './services/card.service';
import {DeckService} from './services/deck.service';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';
import {AlertService} from './services/alert.service';
import {AlertComponent} from './directives';
import {AuthGuard} from './guards';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PageNotFoundComponent,
    HomeComponent,
    UntapLayoutComponent,
    AlertComponent,
    DeckComponent,
    LoginLayoutComponent,
    DeckBuilderComponent
  ],
  imports: [
    BrowserModule,
    NgbAlertModule,
    AppRouting,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    AuthGuard,
    CardService,
    DeckService,
    AuthenticationService,
    UserService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
