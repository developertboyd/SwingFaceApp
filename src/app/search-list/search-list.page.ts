import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardQuery, QueryModifier, RarityQuery, SetQuery, TypeQuery} from '../card-query';
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

    constructor(
        private route: ActivatedRoute,
        private navCtrl: NavController,
        private cardQueryService: CardQueryService,
        private router: Router) {
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

                const set = new SetQuery(setObject);

                const colorArray = colorObject;
                const colorModifiers = colorArray.slice(-2);
                const color = new TypeQuery(colorArray.slice(0, -2), new QueryModifier(this.stringToBool(colorModifiers[0]), false, this.stringToBool(colorModifiers[1])));

                const producesArray = producesObject;
                const producesModifiers = producesArray.slice(-2);
                const produces = new TypeQuery(producesArray.slice(0, -2), new QueryModifier(this.stringToBool(producesModifiers[0]), false, this.stringToBool(producesModifiers[1])));

                const typeArray = typeObject;
                const typeModifiers = typeArray.slice(-2);
                const type = new TypeQuery(typeArray.slice(0, -2), new QueryModifier(this.stringToBool(typeModifiers[0]), false, this.stringToBool(typeModifiers[1])));

                const rarity = new RarityQuery(rarityObject);

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
        this.router.navigate(['/tabs/tab1']).then((e) => {
            if (e) {
                console.log('Navigation is successful!');
            } else {
                console.log('Navigation has failed!');
            }
        });
    }

    private stringToBool(str: string) {
        const ret = str === 'true';
        return ret;
    }
}
