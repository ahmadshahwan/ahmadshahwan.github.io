import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import {Page} from '../../model';

function pageNotFound(slug: string): never {
  throw new Error(`Page with slug ${slug} not found`);
}

@Injectable({
  providedIn: 'root'
})
export class PageRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService
  ) { }

  fetchBySlug(slug: string): Observable<Page> {
    return this.apiClient.fetch('pages', slug).pipe(
      map((page) => page ?? pageNotFound(slug)),
    );
  }

  fetchAll(): Observable<Page[]> {
    return this.apiClient.fetch('pages');
  }
}
