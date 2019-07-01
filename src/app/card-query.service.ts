import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CardQuery} from './card-query';

@Injectable({
    providedIn: 'root'
})
export class CardQueryService {

    constructor(private storage: Storage) {
    }

    getCards(query: CardQuery) {
        console.log(query);
        return this.storage.get('AllCards').then((cards) => {
            let filteredCards = cards.filter((card) => {
                return card.name.indexOf(query.textSearch) >= 0;
            });
            return filteredCards;
        });
    }
}
