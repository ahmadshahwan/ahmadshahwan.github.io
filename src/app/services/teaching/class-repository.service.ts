import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import {Class} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class ClassRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Class[]> {
    return this.apiClient.fetch('institutes').pipe(
      map(institutes => institutes.flatMap(({classes}) => classes)),
    );
  }
}
