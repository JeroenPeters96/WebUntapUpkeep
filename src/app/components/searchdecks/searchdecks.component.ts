import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';
import {debounceTime, switchMap, tap} from 'rxjs/operators';
import {Card, Deck} from '../../models';

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
  card: Card = null;

  constructor(private router: Router, deckService: DeckService) {
    this.deckService = deckService;
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
    console.log('wait wat ' + JSON.stringify(deck));
    console.log('art');
    const deckTemp: Deck = deck;
    console.log('hm' + deckTemp.cards);
    console.log('wait wat2 ' + JSON.stringify(deckTemp));
    this.card = null;
    if (deckTemp.deckArt != null && deckTemp.deckArt !== '') {
      console.log('deckart');
      console.log(deckTemp.deckArt);
      return deckTemp.deckArt;
    }
    if (deckTemp.cards !== null && deckTemp.cards.length !== 0 && deckTemp.cards.length > 0) {
      console.log('yow');
      console.log(deckTemp);
      console.log(deckTemp.cards);
      console.log(deckTemp.cards.length);
      for (let i = 0; i < deckTemp.cards.length; i++) {
        if (this.card == null) {
          this.card = JSON.parse(deckTemp.cards[i]);
        } else {
          const listCard: Card = JSON.parse(deckTemp.cards[i]);
          if (this.card.cmc < listCard.cmc) {
            this.card = listCard;
          }
        }
      }
      console.log('card');
      console.log(this.card);
      return this.card;
    } else {
      return 'https://img.scryfall.com/cards/art_crop/front/f/a/fa56d53c-836c-483d-988d-a288d0ad91bb.jpg?1537149837';
    }
  }

  selectDeck(deck: any | Deck) {
    this.router.navigate(['/deck'], {queryParams: {deckId: deck.id}});
  }
}
