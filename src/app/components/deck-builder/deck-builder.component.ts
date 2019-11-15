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
  format: string;
  formats: string[] = [
    'Standard',
    'Pioneer',
    'Historic',
    'EDH',
    'Modern',
    'Legacy',
    'Vintage'];
  //
  // {
  //   Standard: 'Standard',
  //   Pioneer: 'Pioneer',
  //   Historic: 'Historic',
  //   ElderDragonHighlander: 'EDH',
  //   Modern: 'Modern',
  //   Legacy: 'Legacy',
  //   Vintage: 'Vintage'
  // };

  constructor(private router: Router, deckservice: DeckService) {
    this.deckservice = deckservice;
  }

  ngOnInit() {
  }

  create(deckname: string, deckdescription: string, format: string) {
    this.deck = this.deckservice.createNewDeck(deckname, deckdescription, format);
    if (this.deck !== '') {
      this.router.navigate(['/deck'], {queryParams: {deckId: this.deck}});
    }


  }
}
