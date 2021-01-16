import { Injectable } from '@angular/core';
import { MarvelService } from '@app/shared/marvel/services/marvel.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComicListModel } from '../model/comic.model';
import { ComicsAdapter } from './adapter/comics.adapter';
import { ComicsListResponseDTO } from './dtos/comics.list.response.dto';

@Injectable({
  providedIn: 'root'
})
export class ComicService extends MarvelService {

  public getAll(offset: number = 0, limit: number = 10): Observable<ComicListModel> {
    return this.httpClient.get<ComicsListResponseDTO>(this.prepareURL('/marvel/comics'), {
      params: {
        'offset': String(offset),
        'limit': String(limit)
      }
    }).pipe(map((data: ComicsListResponseDTO) => {
      return ComicsAdapter.listToModel(data);
    }));
  }
}
