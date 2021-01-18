import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListFilterPagination } from './model/list.filter.pagination.model';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list.filter.component.html',
  styleUrls: ['./list.filter.component.sass']
})
export class ListFilterComponent implements OnInit {
  public isCompleteFilter: boolean = true
  constructor() { }

  public limitSelector: FormControl = new FormControl('')

  @Input() public offset: number;
  @Input() public limit: number;
  @Input() public total: number;

  @Output() public changeFilter = new EventEmitter<ListFilterPagination>();

  ngOnInit() {
    this.limitSelector.setValue(this.limit, { emitEvent: false });

    this.limitSelector.valueChanges.subscribe((limit: number) => {
      this.emitEvent(limit, this.offset);
    });
  }

  public changePage(page: number): void {
    this.emitEvent(this.limit, page)
  }

  private emitEvent (limit: number, offset: number): void  {
    this.changeFilter.emit({ limit, offset });
  }


  public getCurrentPage(): number {
    return this.offset + 1;
  }

  public getPages(): number {
    return Math.ceil(this.total / this.limit);
  }

}
