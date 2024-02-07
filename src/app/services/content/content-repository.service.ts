import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Content from '../../model/content';

const QUERY_BY_SLUG = `
  query ContentBySlug($slug: String) {
    content(where: {slug: $slug}) {
      id
      title
      text {
        html
      }
      image {
        url
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ContentRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchBySlug(slug: string): Observable<Content> {
    return this.apiClient
      .post<{content: Content}>(QUERY_BY_SLUG, {slug})
      .pipe(map(r => r.content));
  }
}
