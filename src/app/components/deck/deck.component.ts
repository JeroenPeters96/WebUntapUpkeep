import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Deck} from '../../models';
import {DeckService} from '../../services/deck.service';
import {CardService} from '../../services/card.service';

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
  cards: any;
  deck: Deck;

  constructor(private route: ActivatedRoute,
              private router: Router,
              deckService: DeckService,
              cardService: CardService) {
    this.deckService = deckService;
    this.cardService = cardService;
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
            console.log(this.deck);
            this.updateCards();
          }
        );
    }
  }

  updateCards() {
    this.cardService.getCards(this.deck.cards)
      .subscribe(data => {
          this.cards = data;
          console.log(this.cards);
        }
      );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
