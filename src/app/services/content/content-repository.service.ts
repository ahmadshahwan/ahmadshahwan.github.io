import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import {Content} from '../../model';

function contentNotFound(slug: string): never {
  throw new Error(`Content with slug ${slug} not found`);
}

@Injectable({
  providedIn: 'root'
})
export class ContentRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchBySlug(slug: string): Observable<Content> {
    return this.apiClient.fetch('contents', slug).pipe(
      map((page) => page ?? contentNotFound(slug)),
    );
  }
}
