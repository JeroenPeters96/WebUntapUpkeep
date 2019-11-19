import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';
import {CardService} from '../../services/card.service';
import {Card, CardModel, Deck} from '../../models';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-metdecks',
  templateUrl: './metdecks.component.html',
  styleUrls: ['./metdecks.component.css']
})
export class MetdecksComponent implements OnInit {

  private deckService: DeckService;
  private cardService: CardService;
  picture: Map<Deck,string>;
  filteredDecks: any;

  constructor(private router: Router, deckService: DeckService, cardService: CardService) {
    this.deckService = deckService;
    this.cardService = cardService;
    this.picture = new Map<Deck, string>();
  }

  ngOnInit() {
    this.deckService.getDecksByUser('1')
      .subscribe( data => {
        this.filteredDecks = data;
      })

  }

  savedPicture(deck: Deck) {
    if(this.picture.has(deck))
      return this.picture.get(deck);
    this.picture.set(deck,this.getPicture(deck));
  }

  getPicture(deck: any | Deck) {
    const deckTemp: Deck = deck;
    let card: any = null;
    let cardList: CardModel[];
    if (deckTemp.deckArt != null && deckTemp.deckArt !== '') {
      return deckTemp.deckArt;
    }
    if (deckTemp.cards !== null && deckTemp.cards.length > 0) {
      cardList = deckTemp.cards;
      console.log(cardList);
      this.cardService.getSignature(cardList)
        .pipe(
          debounceTime(500)
        )
        .subscribe(data => {
            card = data;
            console.log(card);
            const tempCard: Card = card;
            this.overwrite(deck,tempCard.artUrl);
            return tempCard.artUrl;
          }
        );
    } else {
      return 'https://img.scryfall.com/cards/art_crop/front/f/a/fa56d53c-836c-483d-988d-a288d0ad91bb.jpg?1537149837';
    }
  }

  overwrite(deck:Deck,url:string) {
    this.picture.set(deck,url);
  }

  selectDeck(deck: any | Deck) {
    this.router.navigate(['/deck'], {queryParams: {deckId: deck.id}});
  }
}
