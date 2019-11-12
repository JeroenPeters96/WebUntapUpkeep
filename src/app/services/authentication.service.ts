import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

  }

  logout() {

  }


  register(username: string, email: string, password: string) {

  }
}
