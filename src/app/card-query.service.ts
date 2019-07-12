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
        return new Promise((resolve, reject) => {
            this.cardLoader.getAllCards().then((allCards: any[]) => {
                console.log(allCards);
                let filteredCards = allCards;
                console.log(query);

                filteredCards = filteredCards.filter((card) => {
                    let ret = false;
                    if (query.set.values.length > 0) {
                        query.set.values.forEach((setQuery) => {
                            if (card.printings.includes(setQuery)) {
                                ret = true;
                            }
                        });
                    }
                    return ret;
                });

                filteredCards = filteredCards.filter((card) => {
                    let ret = false;
                    if (query.textSearch !== '') {
                        // *Aetherborne*"Captain lannery"'Johnson'[Crocodile]<{2}{b}>(2/3)
                        const nameRegex = /(["])(?:(?=(\\?))\2.)*?\1/gm;
                        const nameMatches = Array.from(query.textSearch.matchAll(nameRegex));
                        nameMatches.forEach((group) => {
                            const nameQuery = group[0].replace(/"/g, '');
                            ;
                            if (card.name.indexOf(nameQuery) >= 0) {
                                ret = true;
                            }
                        });

                        const bodyRegex = /(['])(?:(?=(\\?))\2.)*?\1/gm;
                        const bodyMatches = Array.from(query.textSearch.matchAll(bodyRegex));
                        bodyMatches.forEach((group) => {
                            const bodyQuery = group[0].replace(/'/g, '');
                            if (card.name.indexOf(bodyQuery) >= 0) {
                                ret = true;
                            }
                        });

                        const subtypeRegex = /([*])(?:(?=(\\?))\2.)*?\1/gm;
                        const subtypeMatches = Array.from(query.textSearch.matchAll(subtypeRegex));
                        subtypeMatches.forEach((group) => {
                            const subtypeQuery = group[0].replace(/\*/g, '');
                            console.log(subtypeQuery);
                            if (card.subtypes.includes(subtypeQuery)) {
                                ret = true;
                            }
                        });
                    }

                    return ret;
                });

                return resolve(filteredCards);
            });
        });
    }
}
