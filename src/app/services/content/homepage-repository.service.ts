import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Homepage from '../../model/homepage';

const QUERY = `
  {
    homepages {
      id
      bio {
        title
        text {
          text
          html
        }
        image {
          url
          width
          height
        }
      }
      interestsTitle
      interests {
        id
        title
        description
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class HomepageRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) {
  }

  fetch(): Observable<Homepage> {
    return this.apiClient
      .post<{homepages: Homepage[]}>(QUERY)
      .pipe(map(r => r.homepages[0]));
  }
}
