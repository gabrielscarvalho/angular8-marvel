import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackoutComponent } from './blackout.component';



@NgModule({
  declarations: [BlackoutComponent],
  imports: [
    CommonModule
  ],
  exports: [ BlackoutComponent ]
})
export class BlackoutModule { }
