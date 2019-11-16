import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  authService: AuthenticationService;

  showSpinner = null;
  username: string;
  email: string;
  password: string;
  hide = false;

  constructor(private router: Router, authService: AuthenticationService) {
    this.authService = authService;
  }

  ngOnInit() {
  }

  register(username: string, email: string, password: string) {
    this.hide = false;
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      this.hide = true;
      return;
    }
    this.showSpinner = 'spin!';
    this.authService.register(username, email, password);
    this.showSpinner = null;
    this.router.navigate(['/auth']);
  }
}
