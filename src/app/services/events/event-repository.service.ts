import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Event from '../../model/event';

const QUERY = `
query EventQuery {
  events {
    id
    title
    date
    description {
      html
      text
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class EventRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Event[]> {
    return this.apiClient
      .post<{events: Event[]}>(QUERY)
      .pipe(map(r => r.events));
  }
}
