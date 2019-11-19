import {CardModel} from './cardModel';

export class Deck {
  id: string;
  accountId: string;
  deckname: string;
  description: string;
  cards: CardModel[];
  format: string;
  deckArt: string;
}
