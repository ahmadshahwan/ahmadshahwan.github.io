import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Link from '../../model/link';

const QUERY_BY_LABEL = `
query LinksByLabel($labels: [String!]) {
  links( where: {labels: $labels}) {
    id
    title
    route
    labels
  }
}
`;

const QUERY = `
query Links {
  links {
    id
    title
    route
    labels
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class LinkRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Link[]> {
    return this.apiClient
      .post<{links: Link[]}>(QUERY)
      .pipe(map(r => r.links));
  }

  fetchByLabel(labels: string[]): Observable<Link[]> {
    return this.apiClient
      .post<{links: Link[]}>(QUERY_BY_LABEL, {labels})
      .pipe(map(r => r.links));
  }
}
