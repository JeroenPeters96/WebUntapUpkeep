import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) {
  }

  getCards(cards: string[]): Card[] {
    return [];
  }
}
