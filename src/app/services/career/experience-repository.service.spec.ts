import {TestBed} from '@angular/core/testing';

import {ExperienceRepositoryService} from './experience-repository.service';

describe('ExperienceRepositoryService', () => {
  let service: ExperienceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
