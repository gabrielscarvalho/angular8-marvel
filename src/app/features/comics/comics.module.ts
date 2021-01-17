import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ListPageComponent } from './page/list-page/list-page.component';
import { MarvelModule } from '@app/shared/marvel/marvel.module';
import { ComicService } from './services/comic.service';
import { ListModule } from '@app/shared/components/list/list.module';


@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MarvelModule,
    ListModule
  ],
  providers: [ ComicService ]
})
export class ComicsModule { }
