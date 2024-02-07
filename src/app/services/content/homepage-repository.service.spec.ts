import {TestBed} from '@angular/core/testing';

import {HomepageRepositoryService} from './homepage-repository.service';

describe('HomepageRepositoryService', () => {
  let service: HomepageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
