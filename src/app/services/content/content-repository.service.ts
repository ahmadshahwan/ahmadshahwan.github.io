import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Website} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class ContentRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {}

  fetch(): Observable<Website> {
    return this.apiClient.fetch();
  }
}
