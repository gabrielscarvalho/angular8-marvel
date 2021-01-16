import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  protected readonly API_KEY_PARAM = 'apiKey';

  constructor(protected httpClient: HttpClient) { }

  protected prepareURL(urlSuffix: string): string {
    return `${environment.api.baseUrl}${urlSuffix}`
  }
}
