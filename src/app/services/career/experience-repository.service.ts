import {Injectable} from '@angular/core';

import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import Experience from '../../model/experience';
import {EXPERIENCES_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class ExperienceRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Experience[]> {
    return this.apiClient.fetchAll(EXPERIENCES_QUERY);
  }
}
