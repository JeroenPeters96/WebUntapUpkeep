import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  deckname: string;
  deckdescription: string;
  deckservice: DeckService;
  deck: string;

  constructor(private router: Router, deckservice: DeckService) {
    this.deckservice = deckservice;
  }

  ngOnInit() {
  }

  create(deckname: string, deckdescription: string) {
    this.deck = this.deckservice.createNewDeck(deckname, deckdescription);
    if (this.deck !== '') {
      this.router.navigate(['/deck'], {queryParams: {deckId: this.deck}});
    }


  }
}
