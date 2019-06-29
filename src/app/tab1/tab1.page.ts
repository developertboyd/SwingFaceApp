import {Component, OnInit} from '@angular/core';
import {CardQueryService} from '../card-query.service';
import {CardQuery} from '../card-query';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.pug',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  cards: [any];
  textSearch: string;

  constructor(private cardQueryService: CardQueryService) {}

  ngOnInit(): void {
    this.cardQueryService.getCards(new CardQuery('Abrade')).then((filteredCards) => {
      this.cards = filteredCards;
    });
  }

  updateFilter() {
    this.cardQueryService.getCards(new CardQuery(this.textSearch)).then((filteredCards) => {
      this.cards = filteredCards;
    });
  }

}
