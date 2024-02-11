import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, Observable} from 'rxjs';
import {Query, QueryParams} from './queries';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
      private readonly http: HttpClient,
  ) { }

  fetchSingle<T, P extends QueryParams>(query: Query<T[], P>, variables?: P): Observable<T> {
    return this.fetchAll(query, variables)
      .pipe(map(r => r[0]));
  }

  fetchAll<T extends unknown[], P extends QueryParams>(query: Query<T, P>, variables?: P): Observable<T> {
    return this.fetch(query, variables);
  }

  fetch<T, P extends QueryParams>(query: Query<T, P>, variables?: P): Observable<T> {
    return this.http
      .post<{data: {data: T}}>(environment.apiUrl, {query, variables: variables})
      .pipe(map(r => r.data.data));
  }
}
