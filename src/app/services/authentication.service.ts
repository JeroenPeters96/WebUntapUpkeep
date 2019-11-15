import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deck} from '../models';


@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthenticationService {

  private apiModelRegister: { email: string; username: string, password: string; };
  private postString: string;
  private data: Observable<string>;
  private d: Deck;
  private extractData: any;
  private response: any;


  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080';
  private registerUrl: string;


  login(email: string, password: string) {
    if (email === null || password === null) {
      return null;
    }

    this.registerUrl = (this.baseUrl + '/qry' + '/login');
    this.registerUrl = this.registerUrl + '?email=' + email + '&password=' + password;

    return this.http.get(this.registerUrl);
  }


  logout() {

  }


  register(username: string, email: string, password: string) {
    this.apiModelRegister = {email, username, password};
    this.postString = JSON.stringify(this.apiModelRegister);
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.registerUrl = (this.baseUrl + '/cmd' + '/register');
    this.http.post(this.registerUrl, this.postString, config).toPromise()
      .then(this.extractData)
      .catch(this.response);
  }
}
