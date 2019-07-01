import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardQuery} from '../card-query';
import {NavController} from '@ionic/angular';
import {CardQueryService} from '../card-query.service';

@Component({
    selector: 'app-search-list',
    templateUrl: './search-list.page.pug',
    styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
    cards: any;
    cardQuery: CardQuery;

    constructor(private route: ActivatedRoute, private navCtrl: NavController, private cardQueryService: CardQueryService) {
    }

    ngOnInit() {

        this.route
            .queryParams
            .subscribe((queryParams) => {
                console.log(queryParams);
                const textSearch = queryParams.textSearch || '';
                const setObject = queryParams.set || '';
                const colorObject = queryParams.color || '';
                const producesObject = queryParams.produces || '';
                const typeObject = queryParams.type || '';
                const rarityObject = queryParams.rarity || '';

                const set = {
                    values: setObject.split(',')
                };
                const colorArray = colorObject.split(',');
                const colorModifiers = colorArray.slice(-2);
                const color = {
                    values: colorArray.slice(0, -2),
                    modifiers: {
                        and: colorModifiers[0],
                        only: colorModifiers[1]
                    }
                };
                const producesArray = producesObject.split(',');
                const producesModifiers = producesArray.slice(-2);
                const produces = {
                    values: producesArray.slice(0, -2),
                    modifiers: {
                        and: producesModifiers[0],
                        only: producesModifiers[1]
                    }
                };
                const typeArray = typeObject.split(',');
                const typeModifiers = typeArray.slice(-2);
                const type = {
                    values: typeArray.slice(0, -2),
                    modifiers: {
                        and: typeModifiers[0],
                        only: typeModifiers[1]
                    }
                };
                const rarity = {
                    values: rarityObject.split(',')
                };
                this.cardQuery = new CardQuery({
                    textSearch,
                    set,
                    color,
                    produces,
                    type,
                    rarity
                });
                console.log(this.cardQuery);
                this.cardQueryService.getCards(this.cardQuery).then((filteredCards) => {
                    this.cards = filteredCards;
                });
            });
    }

    back() {
        this.navCtrl.navigateRoot('/tabs/tab1');
    }
}
