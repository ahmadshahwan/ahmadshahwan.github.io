import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Publication from '../../model/publication';

const QUERY = `
{
  publications {
    id
    description {
      text
      html
    }
    year
    category {
      id
      name
      rank
      title
    }
  }
}
`;


@Injectable({
  providedIn: 'root'
})
export class PublicationRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Publication[]> {
    return this.apiClient
      .post<{publications: Publication[]}>(QUERY)
      .pipe(map(r => r.publications));
  }
}
