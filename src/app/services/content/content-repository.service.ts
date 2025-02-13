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
  ) {
  }

  fetch(): Observable<Website>;
  fetch<T extends keyof Website>(field: T): Observable<Website[T]>;
  fetch<T extends keyof Website>(field?: T): Observable<Website[T] | Website> {
    return field ? this.apiClient.fetch(field) : this.apiClient.fetch();
  }
}
