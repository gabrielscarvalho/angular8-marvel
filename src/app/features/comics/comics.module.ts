import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ListComponent } from './components/list/list.component';
import { ListPageComponent } from './page/list-page/list-page.component';


@NgModule({
  declarations: [ListComponent, ListPageComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
