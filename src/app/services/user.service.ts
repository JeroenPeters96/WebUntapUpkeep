import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080';

  findUsername(accountId: string) {
    const url = this.baseUrl + '/qry/getUsername/'+accountId;
    return this.http.get(url);
  }
}
