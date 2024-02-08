import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Institute} from '../../model';
import {INSTITUTES_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class InstituteRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Institute[]> {
    return this.apiClient.fetchAll(INSTITUTES_QUERY);
  }
}
