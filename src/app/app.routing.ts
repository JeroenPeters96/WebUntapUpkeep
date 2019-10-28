import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards';
import {UntapLayoutComponent} from './components/untap-layout/untap-layout.component';
import {LoginLayoutComponent} from './components/login-layout/login-layout.component';
import {DeckBuilderComponent} from './components/deck-builder/deck-builder.component';

const routes: Route[] = [

  {path: '404 ', component: PageNotFoundComponent},
  {path: 'auth', component: LoginLayoutComponent,
  children: [
    {
      path: '',
      component: AuthenticationComponent
    }
  ]},
  {path: 'deckbuilder', component: UntapLayoutComponent,
    canActivate: [AuthGuard],
    children:  [

      {
        path: '',
        component: DeckBuilderComponent
      }
    ]
  },
  {path: '**', component: UntapLayoutComponent,
    canActivate: [AuthGuard],
    children:  [

      {
        path: '',
        component: HomeComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})
export class AppRouting {
}

