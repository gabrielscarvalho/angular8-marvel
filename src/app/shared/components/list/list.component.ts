import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListFilterPagination } from './filter/model/list.filter.pagination.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Output() public changePagination = new EventEmitter<ListFilterPagination>();
  
  @Input() public offset: number;
  @Input() public limit: number;
  @Input() public total: number;

  constructor() { }

  ngOnInit() {
  }

  public onChangePage(data: ListFilterPagination): void {
    this.changePagination.emit(data);
  }

}
