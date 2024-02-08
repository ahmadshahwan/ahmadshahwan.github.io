import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import Homepage from '../../model/homepage';
import {HOMEPAGES_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class HomepageRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetch(): Observable<Homepage> {
    return this.apiClient.fetchSingle(HOMEPAGES_QUERY);
  }
}
