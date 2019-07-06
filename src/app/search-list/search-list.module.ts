import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {MtgCardItemComponent} from '../mtg-card-item/mtg-card-item.component';

import {SearchListPage} from './search-list.page';
import {MtgManaSymbolComponent} from '../mtg-mana-symbol/mtg-mana-symbol.component';
import {OrderModule} from 'ngx-order-pipe';

const routes: Routes = [
    {
        path: '',
        component: SearchListPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        OrderModule
    ],
    declarations: [SearchListPage, MtgCardItemComponent, MtgManaSymbolComponent]
})
export class SearchListPageModule {
}
