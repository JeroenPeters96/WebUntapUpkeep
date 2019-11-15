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

  getAutocomplete(cardName: any) {
    if (cardName.toString().length !== 0) {
      return this.http.get('http://localhost:8082/cardqry/getAutocomplete/' + cardName);
    }
    return null;
  }

  getCardByName(cardName: string): Card {
    if (cardName.toString().length === 0) {
      return null;
    }
    this.http.get('http://localhost:8082/cardqry/name/' + cardName).subscribe(
      (data) => {
        console.log(data);
        return data;
      }
    );
  }


}
