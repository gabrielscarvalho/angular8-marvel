import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { BlackoutModule } from '../blackout/blackout.module';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    BlackoutModule
  ], 
  exports: [LoadingComponent]
})
export class LoadingModule { }
