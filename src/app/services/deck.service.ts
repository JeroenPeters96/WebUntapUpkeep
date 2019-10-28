import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DeckService {
  constructor(private http: HttpClient) { }
}
