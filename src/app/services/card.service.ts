import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private newUrl: string;

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8082';


  getAutocomplete(cardName: any) {
    if (cardName.toString().length !== 0) {
      return this.http.get(this.baseUrl + '/cardqry/getAutocomplete/' + cardName);
    }
    return null;
  }

  getCardByName(cardName: string) {
    return this.http.get(this.baseUrl + '/cardqry/name/' + cardName);
  }

  getCards(cards: CardModel[]) {
    console.log("cards");
    console.log(cards);
    if (cards.length === 0) {
      return;
    }
    let newUrl = this.baseUrl + '/cardqry/?cardIds=';
    let count = 0;
    for (let key in cards) {
      newUrl = newUrl + cards[count].cardId + ',';
      count++;
    }
    console.log(newUrl);
    const url = newUrl.substr(0, newUrl.length - 1);

    return this.http.get(url);
  }

  getSignature(cards: CardModel[]) {
    if (cards.length === 0) {
      return;
    }
    let newUrl = this.baseUrl + '/cardqry/getSignature/?cardIds=';
    console.log(cards);

    for(let i = 0; i< cards.length; i++) {
      newUrl = newUrl + cards[i].cardId + ',';
    }

    const url = newUrl.substr(0, newUrl.length - 1);
    console.log(url);
    return this.http.get(url);
  }

  getCardsLikeName(cardName: any) {
    if (cardName.toString().length !== 0) {
      return this.http.get(this.baseUrl + '/cardqry/getLikeName/' + cardName);
    }
  }
}
