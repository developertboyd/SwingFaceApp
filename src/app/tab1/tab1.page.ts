import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {CardQueryService} from '../card-query.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.pug',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    cards: [any];
    textSearch: string;
    set: [];
    color: [];
    produces: [];
    type: [];
    rarity: [];

    constructor(private cardQueryService: CardQueryService, private navCtrl: NavController, private storage: Storage) {
    }

    ngOnInit(): void {
        this.storage.get('lastSearch').then((lastSearch) => {
            if (lastSearch) {
                this.textSearch = lastSearch.textSearch || '';
                this.set = lastSearch.set || [];
                this.color = lastSearch.color || [];
                this.produces = lastSearch.produces || [];
                this.type = lastSearch.type || [];
                this.rarity = lastSearch.rarity || [];
            } else {
                this.textSearch = '';
                this.set = [];
                this.color = [];
                this.produces = [];
                this.type = [];
                this.rarity = [];
            }
        });
    }

    search() {
        let queryParams = {
            textSearch: this.textSearch,
            set: this.set.join(),
            color: this.color.join(),
            produces: this.produces.join(),
            type: this.type.join(),
            rarity: this.rarity.join(),
        };

        this.storage.set('lastSearch', queryParams);
        this.navCtrl.navigateForward(
            ['search-list'],
            {
                queryParams
            });
    }
}
