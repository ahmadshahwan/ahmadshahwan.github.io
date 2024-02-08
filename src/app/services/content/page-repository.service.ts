import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Page} from '../../model';
import {PAGE_BY_SLUG_QUERY, PAGES_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class PageRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService
  ) { }

  fetchBySlug(slug: string): Observable<Page> {
    return this.apiClient.fetch(PAGE_BY_SLUG_QUERY, {slug});
  }

  fetchAll(): Observable<Page[]> {
    return this.apiClient.fetchAll(PAGES_QUERY);
  }
}
