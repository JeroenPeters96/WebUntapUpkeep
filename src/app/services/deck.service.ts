import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card, Deck} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  constructor(private http: HttpClient) {
  }

  getDecksByUserId(userId: string) : Deck[] {
    return null;
  }

  createNewDeck(deckname: string, deckdescription: string): string {

    return 'false';
  }

  getDeck(deckid: string): Deck {

    return new Deck();
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
