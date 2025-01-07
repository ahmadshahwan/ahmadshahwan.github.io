import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client.service';
import {Observable} from 'rxjs';
import {Skill} from '../../model';

@Injectable({
  providedIn: 'root'
})
export class SkillRepositoryService {

  constructor(
    private readonly apiClient: ApiClientService,
  ) { }

  fetchAll(): Observable<Skill[]> {
    return this.apiClient.fetch('skills');
  }
}
