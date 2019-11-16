import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('test');
    // if (sessionStorage.getItem('currentAccount')) {
    //   console.log('user logged in');
    //   return true;
    // }
    // this.router.navigate(['/auth']);
    // return false;
    return true;
  }
}
