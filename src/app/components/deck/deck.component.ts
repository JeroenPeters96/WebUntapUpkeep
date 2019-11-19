import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Card, CardModel, Deck} from '../../models';
import {DeckService} from '../../services/deck.service';
import {CardService} from '../../services/card.service';
import {FormControl} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, OnDestroy {

  private deckId: string;

  private sub: Subscription;
  private deckService: DeckService;
  private cardService: CardService;
  private userService: UserService;
  username: string;
  cards: Card[] = null;
  deck: Deck = new Deck();
  searchCardCtrl = new FormControl();
  hide = false;
  filteredCards: Card[];
  hideStyle: boolean = true;
  constructor(private route: ActivatedRoute,
              private router: Router,
              deckService: DeckService,
              cardService: CardService,
              userService: UserService) {
    this.deckService = deckService;
    this.cardService = cardService;
    this.userService = userService;

    this.searchCardCtrl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.cardService.getCardsLikeName(value)
        ))
      .subscribe(
        data => {
          let temp:any = data;
          this.filteredCards = temp;
          this.hide = true;
        }
      );
  }


  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.deckId = params.deckId || 'null';
      });
    if (this.deckId === 'null') {
      this.router.navigate(['/home']);
    } else {
      this.deckService.getDeck(this.deckId)
        .subscribe(
          (data: any) => {
            if (data == null) {
              this.router.navigate(['/home']);
            }
            this.deck = data;
            if(this.deck.cards!=null && this.deck.cards.length!=0) {
              this.updateCards();
            }

            this.userService.findUsername(this.deck.accountId)
              .subscribe(data => {
                const temp:any = data;
                this.username = temp;
                console.log(data);
              })
          }
        );
    }
  }

  updateCards() {
    this.cardService.getCards(this.deck.cards)
      .subscribe(data => {
          let d:any = data;
          this.cards = d;
        }
      );
  }

  getCards() {
    if(this.cards!=null) {
      return this.cards;
    } else {
      this.updateCards();
      return this.cards;
    }
  }

  getSorc() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type==="Sorcery") {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }

  getLand() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type==="Land") {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }

  getInstant() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type==="Instant") {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }

  getPlane() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type.startsWith("Legendary Planeswalker")) {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }


  getCrea() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type.startsWith("Creature")) {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }

  getEnch() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type==="Enchantment") {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }
  getArt() {
    let cards: Card[] = this.getCards();
    if(cards!=null && cards.length>0) {
      let foundCard: Array<Card> = [];
      for(let i =0; i<cards.length; i++) {
        if(cards[i].type==="Artifact") {
          foundCard.push(cards[i]);
        }
      }
      return foundCard;
    }
  }

  getCount(card: Card) {
    if(this.cards==null) {
      return;
    }
    let count = 0;
    for (let key in this.deck.cards) {
    let model:CardModel = this.deck.cards[count];
    if(model.cardId+''===card.id+'') {
      return model.count;
    }
      count++;
    }
  }

  update() {
    this.deckService.getDeck(this.deckId)
      .subscribe(
        (data: any) => {
          if (data == null) {
            this.router.navigate(['/home']);
          }
          this.deck = data;
          this.updateCards();
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  copyDeck() {

  }

  changeName() {

    this.update();
  }

  changeFormat() {

    this.update();
  }

  deleteDeck() {

  }

  changeView() {
    if(this.hideStyle) {
      this.hideStyle = false;
    } else {
      this.hideStyle = true;
    }
  }

  deckArt() {

    this.update();
  }

  addCard(card: Card) {

    this.update();
  }
}
