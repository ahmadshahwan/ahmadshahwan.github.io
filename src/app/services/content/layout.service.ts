import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Header, Sidebar, Footer} from '../../model';
import {Observable} from 'rxjs';
import {FOOTERS_QUERY, HEADERS_QUERY, SIDEBARS_QUERY} from '../queries';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchHeader(): Observable<Header> {
    return this.apiClient.fetchSingle(HEADERS_QUERY);
  }

  fetchSidebar(): Observable<Sidebar> {
    return this.apiClient.fetchSingle(SIDEBARS_QUERY);
  }

  fetchFooter(): Observable<Footer> {
    return this.apiClient.fetchSingle(FOOTERS_QUERY);
  }
}
