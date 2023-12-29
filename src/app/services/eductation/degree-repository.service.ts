import {Injectable} from '@angular/core';
import {Degree} from './model';
import {ApiClientService} from '../api-client.service';
import {map, Observable} from 'rxjs';

const QUERY = `
query DegreesQuery {
  degrees {
    id
    title
    year
    institution
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
}`;

@Injectable({
  providedIn: 'root'
})
export class DegreeRepositoryService {

  constructor(
      private apiClient: ApiClientService,
  ) {
  }

  fetchAll(): Observable<Degree[]> {
    return this.apiClient
        .post<{degrees: Degree[]}>(QUERY)
        .pipe(map(r => r.degrees));
  }
}
