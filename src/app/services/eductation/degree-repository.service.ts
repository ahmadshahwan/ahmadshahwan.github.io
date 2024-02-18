import {Injectable} from '@angular/core';
import {Degree} from '../../model';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeRepositoryService {

  constructor(
      private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Degree[]> {
    return this.apiClient.fetch('degrees');
  }
}
