import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListCardComponent } from './card/list.card.component';



@NgModule({
  declarations: [ListComponent, ListCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, ListCardComponent]
})
export class ListModule { }
