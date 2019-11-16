import {Component} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-un-tap-nav',
  templateUrl: './untap-layout.component.html',
  styleUrls: ['./untap-layoutcomponent.css']
})
export class UntapLayoutComponent {
  private authService: AuthenticationService;


  constructor(private router: Router, authService: AuthenticationService) {
    this.authService = authService;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
