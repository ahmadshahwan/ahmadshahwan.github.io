import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import Content from '../../model/content';
import {CONTENT_BY_SLUG_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class ContentRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchBySlug(slug: string): Observable<Content> {
    return this.apiClient.fetch(CONTENT_BY_SLUG_QUERY, {slug});
  }
}
