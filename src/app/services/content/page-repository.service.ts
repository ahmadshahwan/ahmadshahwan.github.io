import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Page from '../../model/page';

const QUERY = `
query Pages {
  pages {
    id
    slug
    title
    links {
      id
      title
      route
    }
  }
}
`;

const QUERY_BY_SLUG = `
query Page($slug: String) {
  page(where: {slug: $slug}) {
    id
    slug
    title
    links {
      id
      title
      route
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class PageRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService
  ) { }

  fetchBySlug(slug: string): Observable<Page> {
    return this.apiClient.post<{page: Page}>(QUERY_BY_SLUG, {slug})
      .pipe(map(r => r.page));
  }

  fetchAll(): Observable<Page[]> {
    return this.apiClient.post<{pages: Page[]}>(QUERY)
      .pipe(map(r => r.pages));
  }
}
