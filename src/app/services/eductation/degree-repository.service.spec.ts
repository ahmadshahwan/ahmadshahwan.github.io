import {TestBed} from '@angular/core/testing';

import {DegreeRepositoryService} from './degree-repository.service';

describe('DegreeRepositoryService', () => {
  let service: DegreeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegreeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
