import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-mtg-mana-symbol',
    templateUrl: './mtg-mana-symbol.component.pug',
    styleUrls: ['./mtg-mana-symbol.component.scss'],
})
export class MtgManaSymbolComponent implements OnInit, OnChanges {

    @Input() manaCostInput: any;
    manaCost: string;
    values: any[];
    pattern = /{(.)}??/g;

    constructor() {
    }

    ngOnInit() {
        this.manaCost = this.manaCostInput;
    }

    getManaValues() {
        if (this.manaCost !== '' && this.manaCost) {
            return this.manaCost.match(/{(.)}?/g);
        } else {
            return [];
        }
    }

    ngOnChanges() {
        this.manaCost = this.manaCostInput;
        console.log(this.manaCost);
    }

    manaSymbol(symbol) {
        return `ms-${symbol.substring(1, 2).toLowerCase()}`;
    }
}
