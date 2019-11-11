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

  constructor(private router: Router, authService: AuthenticationService) {
    this.authService = authService;
  }

  ngOnInit() {
  }

  register(username: string, email: string, password: string) {
    this.showSpinner = 'spin!';
    this.authService.register(username, email, password);
    this.router.navigate(['/auth']);
  }
}
