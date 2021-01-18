import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListCardComponent } from './card/list.card.component';
import { ListFilterComponent } from './filter/list.filter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, ListCardComponent, ListFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ListComponent, ListCardComponent, ListFilterComponent]
})
export class ListModule { }
