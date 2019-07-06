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
            this.http.get('assets/cards/AllCards.json').subscribe((data: any) => {
                this.http.get('assets/sets/SetList.json').subscribe((data: any) => {
                    this.sets = data;
                    this.cards = [];
                    Object.keys(data).forEach((key) => {
                        this.cards.push(data[key]);
                    });
                    resolve();
                });
            });
        });
    }

    getCards() {
        return this.cards;
    }

    getSets() {
        return this.sets;
    }
}
