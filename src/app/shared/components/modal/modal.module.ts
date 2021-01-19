import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BlackoutModule } from '../blackout/blackout.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    BlackoutModule
  ],
  exports: [ ModalComponent ]
})
export class ModalModule { }
