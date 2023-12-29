import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
      private http: HttpClient,
  ) { }

  post<T>(query: string): Observable<T> {
    return this.http
        .post<{data: T}>(environment.apiUrl, {query})
        .pipe(map(r => r.data));
  }
}
