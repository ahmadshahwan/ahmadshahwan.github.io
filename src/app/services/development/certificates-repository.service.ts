import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Certificate} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Certificate[]> {
    return this.apiClient.fetch('certificates');
  }
}
