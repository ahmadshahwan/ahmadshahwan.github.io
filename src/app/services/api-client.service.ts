import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, Observable} from 'rxjs';
import {Query} from './queries';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
      private readonly http: HttpClient,
  ) { }

  post<T>(
    query: string,
    variables?: Record<string, unknown>,
  ): Observable<T> {
    return this.http
        .post<{data: T}>(environment.apiUrl, {query, variables: variables})
        .pipe(map(r => r.data));
  }

  fetchFirst<T>(query: Query<T[]>, variables?: Record<string, unknown>): Observable<T> {
    return this.http
      .post<{data: {data: T[]}}>(environment.apiUrl, {query, variables: variables})
      .pipe(map(r => r.data.data[0]));
  }

  fetchAll<T extends unknown[]>(query: Query<T>, variables?: Record<string, unknown>): Observable<T> {
    return this.http
      .post<{data: {data: T}}>(environment.apiUrl, {query, variables: variables})
      .pipe(map(r => r.data.data));
  }

  fetch<T>(query: Query<T>, variables?: Record<string, unknown>): Observable<T> {
    return this.http
        .post<{data: {data: T}}>(environment.apiUrl, {query, variables: variables})
        .pipe(map(r => r.data.data));
  }
}
