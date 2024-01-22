import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';
import Institute from '../../model/institute';

const QUERY = `
query InstituteQuery {
  institutes {
    id
    name
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
    classes {
      id
      title
      description {
        text
        html
      }
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class InstituteRepositoryService {

  constructor(
    private apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Institute[]> {
    return this.apiClient
      .post<{institutes: Institute[]}>(QUERY)
      .pipe(map(r => r.institutes));
  }
}
