import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, Observable, ReplaySubject} from 'rxjs';
import {Query, WEBSITE_QUERY} from './queries';
import {LocaleService} from './locale.service';
import {LocalizedWebsite, Website} from '../model';

interface Sluggish {
  slug: string;
}

type KeysMatchingType<T, V> = {[K in keyof T]: T[K] extends V ? K : never}[keyof T];
type KeysOfWebsite = keyof Website;
type SluggishKeysOfWebsite = KeysMatchingType<Website, Sluggish[]>;


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private readonly awaitingLocalizedWebsite = new ReplaySubject<LocalizedWebsite>();

  constructor(
      private readonly http: HttpClient,
      private readonly localeService: LocaleService,
  ) {
    this.fetchInternal(WEBSITE_QUERY).subscribe(website => this.awaitingLocalizedWebsite.next(website));
  }


  fetch<K extends SluggishKeysOfWebsite>(field: K, slug: string): Observable<Website[K][number] | undefined>;
  fetch<K extends KeysOfWebsite>(field: K): Observable<Website[K]>;
  fetch(): Observable<Website>;
  fetch<K extends KeysOfWebsite>(field?: K, slug?: string) {
    const locale = this.localeService.current() || 'en';
    const mapper = (cache: LocalizedWebsite) => !field ?
        cache[locale] : slug ?
        cache[locale][field as SluggishKeysOfWebsite].find(e => e.slug === slug) :
        cache[locale][field];
    return this.fetchLocalizedWebsite().pipe(map(mapper));
  }

  private fetchLocalizedWebsite(): Observable<LocalizedWebsite> {
    return this.awaitingLocalizedWebsite.asObservable();
  }

  private fetchInternal<T>(query: Query<T>): Observable<T> {
    // Add query hash to URL. This is a workaround of this issue: https://github.com/angular/angular/issues/54377
    const url = `${environment.apiUrl}?idem_id=${this.hash(query)}`;
    return this.http
      .post<{data: T}>(url, {query})
      .pipe(map(r => r.data));
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
