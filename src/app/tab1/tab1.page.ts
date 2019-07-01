import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {IonicSelectableComponent} from 'ionic-selectable';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.pug',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    cards: [any];
    sets: [any];
    textSearch: string;
    port: [];
    set: [];
    color: [];
    produces: [];
    type: [];
    rarity: [];

    constructor(private navCtrl: NavController, private storage: Storage, private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('assets/sets/SetList.json').subscribe((data: any) => {
            this.sets = data;
        });
        this.textSearch = '';
        this.port = [];
        this.color = [];
        this.produces = [];
        this.type = [];
        this.rarity = [];
    }

    setChange(event: {
        component: IonicSelectableComponent,
        value: any
    }) {
        let codes = [];
        this.port.forEach((set) => {
            codes.push(set.code);
        });
        this.set = codes;
    }

    search() {
        const queryParams = {
            textSearch: this.textSearch,
            set: this.set.join(),
            color: this.color.join(),
            produces: this.produces.join(),
            type: this.type.join(),
            rarity: this.rarity.join(),
        };

        this.router.navigate(['/search-list'], {queryParams}).then((e) => {
            if (e) {
                console.log('Navigation is successful!');
            } else {
                console.log('Navigation has failed!');
            }
        });
    }
}
