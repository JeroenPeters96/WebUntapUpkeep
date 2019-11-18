import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private newUrl: string;

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8082';


  getAutocomplete(cardName: any) {
    if (cardName.toString().length !== 0) {
      return this.http.get(this.baseUrl + '/cardqry/getAutocomplete/' + cardName);
    }
    return null;
  }

  getCardByName(cardName: string) {
    return this.http.get(this.baseUrl + '/cardqry/name/' + cardName);
  }

  getCards(cards: Map<string, number>) {
    if (cards.size === 0) {
      return;
    }
    let newUrl = this.baseUrl + '/cardqry/?cardIds=';

    for (const key of Array.from(cards.keys())) {
      newUrl = newUrl + key + ',';
    }

    const url = newUrl.substr(0, newUrl.length - 1);

    return this.http.get(url);
  }

  getSignature(cards: Map<string, number>) {
    if (cards.size === 0) {
      return;
    }
    let newUrl = this.baseUrl + '/cardqry/getSignature/?cardIds=';
    console.log(cards);

    
    const keys: string[] = Object.keys(cards);
    console.log('keys');
    console.log(keys);

    for (const key in cards.entries()) {
      console.log(key);
    }
// newUrl = newUrl + key + ',';
    // Object.keys(cards).forEach(function(key) {
    //   newUrl = newUrl + key + ',';
    // });


    const url = newUrl.substr(0, newUrl.length - 1);
    console.log(url);
    return this.http.get(url);
  }
}
