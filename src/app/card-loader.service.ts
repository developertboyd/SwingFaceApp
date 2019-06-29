import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardLoaderService {

  constructor(private storage: Storage, private http: HttpClient) { }
  loadCards() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/cards/AllCards.json').subscribe((data: any) => {
        let cards = [];
        Object.keys(data).forEach((key) => {
          cards.push(data[key]);
        });
        this.storage.set('AllCards', cards);
        resolve();
      });
    });
  }
}
