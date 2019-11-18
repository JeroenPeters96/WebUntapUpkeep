import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {Card, Deck} from '../../models';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-searchdecks',
  templateUrl: './searchdecks.component.html',
  styleUrls: ['./searchdecks.component.css']
})
export class SearchdecksComponent implements OnInit {

  private deckService: DeckService;
  searchDeckCtrl = new FormControl();
  isLoading = false;
  filteredDecks: any;
  hide = false;
  deck: Deck;
  private cardService: CardService;

  constructor(private router: Router, deckService: DeckService, cardService: CardService) {
    this.deckService = deckService;
    this.cardService = cardService;
  }

  ngOnInit() {
    this.searchDeckCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(
          () => {
            this.filteredDecks = [];
            this.isLoading = true;
            this.hide = false;
          }),
        switchMap(value => this.deckService.getDecksByLikeName(value))
      )
      .subscribe(data => {
        this.filteredDecks = data;
        this.hide = true;
        console.log(data);
        console.log(this.filteredDecks);
      });
  }

  getPicture(deck: any | Deck) {
    const deckTemp: Deck = deck;
    let card: any = null;
    let cardMap = new Map();
    if (deckTemp.deckArt != null && deckTemp.deckArt !== '') {
      return deckTemp.deckArt;
    }
    if (deckTemp.cards !== null) {
      console.log('base' + deckTemp);

      cardMap = deckTemp.cards;
      console.log(cardMap);
      this.cardService.getSignature(cardMap)
        .pipe(
          debounceTime(500)
        )
        .subscribe(data => {
            console.log('return');
            console.log(data);
            card = data;
            console.log(card);
            const tempCard: Card = card;
            // return tempCard.artUrl;
          }
        );
      return 'https://img.scryfall.com/cards/art_crop/front/f/a/fa56d53c-836c-483d-988d-a288d0ad91bb.jpg?1537149837';
    } else {
      return 'https://img.scryfall.com/cards/art_crop/front/f/a/fa56d53c-836c-483d-988d-a288d0ad91bb.jpg?1537149837';
    }
  }


  selectDeck(deck: any | Deck) {
    this.router.navigate(['/deck'], {queryParams: {deckId: deck.id}});
  }
}
