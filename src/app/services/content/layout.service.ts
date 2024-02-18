import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Footer, Header, Sidebar} from '../../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchHeader(): Observable<Header> {
    return this.apiClient.fetch('header');
  }

  fetchSidebar(): Observable<Sidebar> {
    return this.apiClient.fetch('sidebar');
  }

  fetchFooter(): Observable<Footer> {
    return this.apiClient.fetch('footer');
  }
}
