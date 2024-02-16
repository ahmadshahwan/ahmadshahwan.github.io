import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Class} from '../../model';
import {CLASSES_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class ClassRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Class[]> {
    return this.apiClient.fetchAll(CLASSES_QUERY);
  }
}
