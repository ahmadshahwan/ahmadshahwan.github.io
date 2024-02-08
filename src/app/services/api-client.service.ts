import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, Observable} from 'rxjs';
import {Query, QueryParams} from './queries';
import {LocaleService} from './locale.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
      private readonly http: HttpClient,
      private readonly localeService: LocaleService,
  ) { }

  private options(): {headers?: Record<string, string>} {
    const locales = this.localeService.current() === 'fr' ? 'fr, en' : 'en';
    return {headers: {'gcms-locales': locales}};
  }

  fetchSingle<T, P extends QueryParams>(query: Query<T[], P>, variables?: P): Observable<T> {
    return this.fetchAll(query, variables)
      .pipe(map(r => r[0]));
  }

  fetchAll<T extends unknown[], P extends QueryParams>(query: Query<T, P>, variables?: P): Observable<T> {
    return this.fetch(query, variables);
  }

  fetch<T, P extends QueryParams>(query: Query<T, P>, variables?: P): Observable<T> {
    // Add query hash to URL. This is a workaround of this issue: https://github.com/angular/angular/issues/54377
    const url = `${environment.apiUrl}?idem_id=${this.hash(query)}`;
    return this.http
      .post<{data: {data: T}}>(url, {query, variables: variables}, this.options())
      .pipe(map(r => r.data.data));
  }

  private hash(value: string): string {
    let hash = 0;
    for (const char of value) {
      hash = ((hash << 5) - hash + char.charCodeAt(0)) << 0;
    }
    // Force positive number hash. 2147483647 = equivalent of Integer.MAX_VALUE.
    hash += 2147483647 + 1;
    return hash.toString();
  }
}
