import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list.card.component.html',
  styleUrls: ['./list.card.component.sass']
})
export class ListCardComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
