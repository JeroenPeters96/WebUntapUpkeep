import { Component, OnInit } from '@angular/core';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {CardService} from '../../services/card.service';
import {Router} from '@angular/router';
import {Card} from '../../models';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent implements OnInit {

  cardService: CardService;
  searchCardCtrl = new FormControl();
  isLoading = false;
  filteredCards: any;
  hide =false;

  constructor(private router: Router, cardService: CardService) {
    this.cardService = cardService;
  }
  ngOnInit() {
    this.searchCardCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.filteredCards = [];
          this.isLoading = true;
          this.hide = false;
        }),
        switchMap(value => this.cardService.getAutocomplete(value)
          )
        )
      .subscribe(data => {
          this.filteredCards = data;
          console.log(this.filteredCards);
          this.hide = true;
      });
  }

  selectCard(card: string) {
    console.log(card);
    this.router.navigate(['/card'], {queryParams: {cardName: card}});
  }
}
