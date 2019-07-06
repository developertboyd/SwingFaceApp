import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CardQuery} from './card-query';
import {CardLoaderService} from './card-loader.service';

@Injectable({
    providedIn: 'root'
})
export class CardQueryService {

    constructor(private storage: Storage, private cardLoader: CardLoaderService) {
    }

    getCards(query: CardQuery) {
        const allCards = this.cardLoader.cards;
        return new Promise(resolve => {
            resolve();
        }).then(() => {
            let filteredCards = allCards;
            console.log(query);

            if (query.textSearch !== '') {
                filteredCards = filteredCards.filter((card) => {
                    return card.name.indexOf(query.textSearch) >= 0;
                });
            }

            if (query.set.values.length > 0) {
                filteredCards = filteredCards.filter((card) => {
                    let ret = false;
                    query.set.values.forEach((setQuery) => {
                        if (card.printings.includes(setQuery)) {
                            ret = true;
                        }
                    });
                    return ret;
                });
            }

            return filteredCards;
        });
    }
}
