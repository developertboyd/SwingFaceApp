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
        const cards = this.cardLoader.getCards();
        return new Promise(resolve => {
            resolve();
        }).then(() => {
            let filteredCards = cards.filter((card) => {
                return card.name.indexOf(query.textSearch) >= 0;
            });

            filteredCards = cards.filter((card) => {
                let ret = false;
                query.set.values.forEach((setQuery) => {
                    if (card.printings.includes(setQuery)) {
                        ret = true;
                    }
                });
                return ret;
            });
            console.log(filteredCards);
            return filteredCards;
        });
    }
}
