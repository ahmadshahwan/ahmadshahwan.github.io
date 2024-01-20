import {Injectable} from '@angular/core';

import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Experience from '../../model/experience';

const QUERY = `
query ExperienceQuery {
  experiences {
    id
    title
    period
    summary {
      html
      text
    }
    details {
      html
    }
    icon {
      url(
        transformation: {
          image: {
            resize: {
              width: 32, height: 32,
            }
          }
          document: {
            output: {
              format: png
            }
          }
        }
      )
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ExperienceRepositoryService {

  constructor(
    private apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Experience[]> {
    return this.apiClient
      .post<{experiences: Experience[]}>(QUERY)
      .pipe(map(r => r.experiences));
  }
}
