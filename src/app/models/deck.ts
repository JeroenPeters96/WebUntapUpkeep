export class Deck {
  id: string;
  accountId: string;
  deckname: string;
  description: string;
  cards: Map<string, number>;
  format: string;
  deckArt: string;
}
