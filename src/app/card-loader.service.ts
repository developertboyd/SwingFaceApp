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
            this.storage.get('VERSION:4.4.2').then((updated) => {
                if (!updated) {
                    this.http.get('assets/cards/AllCards.json').subscribe((cardData: any) => {
                        this.http.get('assets/sets/SetList.json').subscribe((setData: any) => {
                            this.storage.set('SETS', setData).then(() => {
                                let cardCalls = [];
                                Object.keys(cardData).forEach((key) => {
                                    cardCalls.push(this.storage.set(`CARD:${key}`, cardData[key]));
                                });
                                Promise.all(cardCalls).then((responses) => {
                                    this.storage.set('VERSION:4.4.2', true);
                                    resolve();
                                });
                            });
                        });
                    });
                } else {
                    resolve();
                }
            });
        });
    }

    getSets() {
        return new Promise((resolve, reject) => {
            this.storage.get('SETS').then((sets) => {
                resolve(sets);
            });
        });
    }

    getAllCards() {
        return new Promise((resolve, reject) => {
            let cards = [];
            this.storage.forEach((value, key, iterationNumber) => {
                if (key.includes('CARD:')) {
                    cards.push(value);
                }
            }).then(() => {
                resolve(cards);
            });
        });
    }
}
