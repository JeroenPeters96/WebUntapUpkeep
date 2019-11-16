import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CardService} from '../../services/card.service';
import {Card} from '../../models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private sub: Subscription;
  private cardId: string;
  private cardService: CardService;
  private card: Card = new Card();

  constructor(private route: ActivatedRoute,
              private router: Router,
              cardService: CardService) {
    this.cardService = cardService;
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.cardId = params.cardName || 'null';
      });
    if (this.cardId === 'null') {
      this.router.navigate(['/home']);
    } else {
      this.cardService.getCardByName(this.cardId)
        .subscribe(
          (data: any) => {
            if (data == null) {
              this.router.navigate(['/home']);
            }
            this.card = data;
            console.log(this.card);
          }
        );
    }
  }


}
