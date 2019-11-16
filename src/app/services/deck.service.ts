import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card, Deck, User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private accountId: string;
  private createUrl: string;
  private payload: { accountId: string; name: string; format: string; description: string };
  private account: User;

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8081';

  getDecksByUserId(userId: string): Deck[] {
    return null;
  }

  createNewDeck(deckName: string, deckDescription: string, mtgFormat: string) {
    this.accountId = sessionStorage.getItem('currentAccount');
    this.account = JSON.parse(this.accountId);
    this.payload = {
      accountId: this.account.id,
      name: deckName,
      description: deckDescription,
      format: mtgFormat
    };
    this.createUrl = this.baseUrl + '/cmd/create';

    return this.http.post(this.createUrl, this.payload);
  }

  getDeck(deckid: string) {
    return this.http.get(this.baseUrl + '/qry/' + deckid);
  }

  delete(deckId: string) {

  }

  removeCards(deckId: string, cards: Card[]) {

  }

  addCards(deckId: string, cards: Card[]) {

  }

  copyDeck(deck: Deck) {

  }

  rename(deckId: string, newName: string) {

  }
}
