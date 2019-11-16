import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {DeckService} from '../../services/deck.service';

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

  constructor(private router: Router, deckService: DeckService) {
    this.deckService = deckService;
  }

  ngOnInit() {
  }

}
