import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.pug',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    cards: [any];
    sets: [any];
    port: [];
    textSearch = '';
    color = [];
    produces = [];
    type = [];
    rarity = [];

    querySearch: any;

    constructor(private navCtrl: NavController, private storage: Storage, private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('assets/sets/SetList.json').subscribe((data: any) => {
            this.sets = data;
        });
        this.querySearch = {};
        this.textSearch = '';
        this.port = [];
        this.color = [];
        this.produces = [];
        this.type = [];
        this.rarity = [];
    }

    formChange() {
        this.querySearch = {};
        if (this.textSearch !== '') {
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
