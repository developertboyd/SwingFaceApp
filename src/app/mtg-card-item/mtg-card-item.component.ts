import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-mtg-card-item',
    templateUrl: './mtg-card-item.component.pug',
    styleUrls: ['./mtg-card-item.component.scss'],
})
export class MtgCardItemComponent implements OnInit {

    @Input() card: any;

    constructor() {
    }

    ngOnInit() {
    }
}
