import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Event} from '../../model';
import {EVENTS_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class EventRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Event[]> {
    return this.apiClient.fetchAll(EVENTS_QUERY);
  }
}
