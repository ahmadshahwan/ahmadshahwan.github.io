import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Publication} from '../../model';


@Injectable({
  providedIn: 'root'
})
export class PublicationRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Publication[]> {
    return this.apiClient.fetch('publications');
  }
}
