import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ MarvelService ]
})
export class MarvelModule { }
