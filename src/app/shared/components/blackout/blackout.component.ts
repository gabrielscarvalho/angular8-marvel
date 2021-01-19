import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blackout',
  templateUrl: './blackout.component.html',
  styleUrls: ['./blackout.component.sass']
})
export class BlackoutComponent {

  @Input() show: boolean = false;
}
