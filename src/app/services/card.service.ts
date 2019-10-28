import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CardService {
  constructor(private http: HttpClient) { }

}
