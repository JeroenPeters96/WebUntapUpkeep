import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card, Deck} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor(private http: HttpClient) {
  }

  createnewdeck(deckname: string, deckdescription: string): string {

    return 'false';
  }

  getdeck(deckid: string): Deck {

    return new Deck();
  }

  delete(deckId: string) {

  }

  removecards(deckId: string, cards: Card[]) {

  }

  addcards(deckId: string, cards: Card[]) {

  }

  copydeck(deck: Deck) {

  }

  rename(deckId: string, newName: string) {

  }
}
