import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  deckName: string;
  deckDescription: string;
  deckService: DeckService;
  deck: string;
  selectedFormat: string;
  formats: string[] = [
    'Standard',
    'Pioneer',
    'Historic',
    'EDH',
    'Modern',
    'Legacy',
    'Vintage'];
  private json: string;

  constructor(private router: Router, deckService: DeckService) {
    this.deckService = deckService;
  }

  private response: { deckId: string; };

  ngOnInit() {
  }

  create(deckName: string, deckDescription: string, format: string) {
    this.deckService.createNewDeck(deckName, deckDescription, format)
      .subscribe(
        (data) => {
          this.json = JSON.stringify(data);
          this.response = JSON.parse(this.json);
          this.continue(this.response.deckId);
        },
        error => {
          console.log(error);
        }
      );
  }

  continue(deckIds: string) {
    this.router.navigate(['/deck'], {queryParams: {deckId: deckIds}});
  }

  setFormat(format: string) {
    this.selectedFormat = format;
  }

}
