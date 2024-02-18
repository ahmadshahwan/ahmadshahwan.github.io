import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Institute} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class InstituteRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Institute[]> {
    return this.apiClient.fetch('institutes');
  }
}
