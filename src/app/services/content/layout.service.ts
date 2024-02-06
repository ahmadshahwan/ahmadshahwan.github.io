import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import Header from '../../model/header';
import {map, Observable} from 'rxjs';

const QUERY = `
{
  headers {
    id
    subtitle
    links {
      id
      title
      route
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchHeader(): Observable<Header> {
    return this.apiClient.post<{headers: Header[]}>(QUERY)
      .pipe(map(r => r.headers[0]));
  }
}
