import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ListComponent } from './components/list/list.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { MarvelModule } from '@app/shared/marvel/marvel.module';
import { ComicService } from './services/comic.service';


@NgModule({
  declarations: [ListComponent, ListPageComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MarvelModule
  ],
  providers: [ ComicService ]
})
export class ComicsModule { }
