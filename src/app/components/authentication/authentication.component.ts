import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  authService: AuthenticationService;

  constructor(private router: Router, authService: AuthenticationService) {
    this.authService = authService;
  }

  email: string;
  password: string;
  showSpinner = null;

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.showSpinner = 'spin!';
    this.authService.login(email, password);
    if (localStorage.getItem('currentAccount')) {
      this.router.navigate(['/home']);
    }
  }
}
