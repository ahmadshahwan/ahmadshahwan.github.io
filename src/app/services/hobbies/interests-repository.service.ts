import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Interest} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class InterestsRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Interest[]> {
    return this.apiClient.fetch('interests');
  }
}
