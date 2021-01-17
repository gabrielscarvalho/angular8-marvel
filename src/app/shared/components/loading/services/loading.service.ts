import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loader: Subject<boolean> = new Subject();

  constructor() { }

  public show(): void {
    this.loader.next(true);
  }

  public hide(): void {
    this.loader.next(false);
  }
}
