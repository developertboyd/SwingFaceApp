import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CardLoaderService {
    cards: any[];
    sets: [any];

    constructor(private storage: Storage, private http: HttpClient) {
    }

    loadCards() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/cards/AllCards.json').subscribe((cardData: any) => {
                this.http.get('assets/sets/SetList.json').subscribe((setData: any) => {
                    this.sets = setData;
                    this.cards = [];
                    Object.keys(cardData).forEach((key) => {
                        this.cards.push(cardData[key]);
                    });
                    resolve();
                });
            });
        });
    }
}
