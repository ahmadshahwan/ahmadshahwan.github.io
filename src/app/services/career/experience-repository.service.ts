import {Injectable} from '@angular/core';

import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Experience} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Experience[]> {
    return this.apiClient.fetch('experiences');
  }
}
