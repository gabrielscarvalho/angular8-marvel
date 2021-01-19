import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() open: boolean = false
  @Input() title: string;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  public closeModal(): void {
    this.close.emit();
  }

}
