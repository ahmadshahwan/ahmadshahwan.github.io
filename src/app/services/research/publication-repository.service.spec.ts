import {TestBed} from '@angular/core/testing';

import {PublicationRepositoryService} from './publication-repository.service';

describe('PublicationRepositoryService', () => {
  let service: PublicationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
