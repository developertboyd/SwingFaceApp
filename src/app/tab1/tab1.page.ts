import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CardLoaderService} from '../card-loader.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.pug',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    cards: [any];
    sets: any[];
    port: [];
    textSearch = '';
    color = [];
    produces = [];
    type = [];
    rarity = [];

    querySearch: any;

    constructor(private navCtrl: NavController, private storage: Storage, private router: Router, private http: HttpClient, private cardLoader: CardLoaderService) {
    }

    ngOnInit(): void {
        this.querySearch = {};
        this.textSearch = '';
        this.port = [];
        this.color = [];
        this.produces = [];
        this.type = [];
        this.rarity = [];
        this.cardLoader.getSets().then((sets: any[]) => {
            console.log(sets);
            this.sets = sets;
        });
    }

    logStorage() {
        this.storage.length().then((response) => {
            console.log("Total Cards");
            console.log(response);
        });
    }

    formChange() {
        this.querySearch = {};
        if (this.textSearch !== '') {
            console.log('CHANGING TEXT');
            this.querySearch.textSearch = this.textSearch;
        }

        if (this.port.length > 0) {
            let codes: any[] = [];
            this.port.forEach((set: any) => {
                codes.push(set.code);
            });
            this.querySearch.set = codes;
        }
        console.log(this.querySearch);
    }
}
