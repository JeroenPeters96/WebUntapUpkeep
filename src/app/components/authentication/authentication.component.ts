import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authService: AuthenticationService;
  hide = false;
  private user: User;

  constructor(private router: Router, authService: AuthenticationService) {
    this.authService = authService;
    if (localStorage.getItem('currentAccount')) {
      this.router.navigate(['/home']);
    }
  }

  email: string;
  password: string;
  showSpinner = null;

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.showSpinner = 'spin!';
    this.hide = false;
    this.authService.login(email, password).subscribe((data: any) => {
      if (data == null) {
        this.hide = true;
        this.showSpinner = null;
      }
      this.user = data;
      this.continue();
    });
  }

  private continue() {
    if (this.user !== null) {
      sessionStorage.setItem('currentAccount', JSON.stringify(this.user));
      this.router.navigate(['/home']);
    } else {
      this.hide = true;
      this.showSpinner = null;
    }
  }


}
