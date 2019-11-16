import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationComponent} from './components/authentication/authentication.component';

import {AppRouting} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UntapLayoutComponent} from './components/untap-layout/untap-layout.component';
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
import {LoginLayoutComponent} from './components/login-layout/login-layout.component';
import {DeckBuilderComponent} from './components/deck-builder/deck-builder.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {RememberPasswordComponent} from './components/remember-password/remember-password.component';

import {
  _MatMenuDirectivesModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MetdecksComponent} from './components/metdecks/metdecks.component';
import {SearchdecksComponent} from './components/searchdecks/searchdecks.component';
import {CardsComponent} from './components/cards/cards.component';
import {SearchcardComponent} from './components/searchcard/searchcard.component';
import {FlexLayoutModule} from '@angular/flex-layout';

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
    DeckBuilderComponent,
    CreateAccountComponent,
    RememberPasswordComponent,
    MetdecksComponent,
    SearchdecksComponent,
    CardsComponent,
    SearchcardComponent
  ],
  imports: [
    FlexLayoutModule,
    HttpClientModule,
    BrowserModule,
    NgbAlertModule,
    AppRouting,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule
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
