import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list-card',
  templateUrl: './list.card.component.html',
  styleUrls: ['./list.card.component.sass']
})
export class ListCardComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() id: number;
  @Output() selectCard: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.selectCard.emit(this.id);
  }

}
