import { Injectable } from '@angular/core';
import { MarvelService } from '@app/shared/marvel/services/marvel.service';

@Injectable({
  providedIn: 'root'
})
export class ComicService extends MarvelService {

  public getAll(offset: number = 0, limit: number = 10) {
    return this.httpClient.get(this.prepareURL('/marvel/comics'), {
      params: {
        'offset': String(offset),
        'limit': String(limit)
      }
    })
  }
}
