import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardComponent } from './cards-list/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardsListComponent
  ],
  exports: [
    CardsListComponent
  ]
})
export class CardsModule { }
