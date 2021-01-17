import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list.filter.component.html',
  styleUrls: ['./list.filter.component.sass']
})
export class ListFilterComponent implements OnInit {
  public isCompleteFilter: boolean = true
  constructor() { }

  ngOnInit() {
  }

}
