import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import Header from '../../model/header';
import {map, Observable} from 'rxjs';
import {Sidebar} from '../../model/Sidebar';

const QUERY_HEADERS = `
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

const QUERY_SIDEBARS = `
{
  sidebars {
    id
    externalLinksMenuTitle
    externalLinks {
      id
      title
      url
      icon {
        url(
        transformation: {
          image: {
            resize: {
              width: 16, height: 16,
            }
          }
          document: {
            output: {
              format: png
            }
          }
        })
      }
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchHeader(): Observable<Header> {
    return this.apiClient.post<{headers: Header[]}>(QUERY_HEADERS)
      .pipe(map(r => r.headers[0]));
  }

  fetchSidebar(): Observable<Sidebar> {
    return this.apiClient.post<{sidebars: Sidebar[]}>(QUERY_SIDEBARS)
      .pipe(map(r => r.sidebars[0]));
  }
}
