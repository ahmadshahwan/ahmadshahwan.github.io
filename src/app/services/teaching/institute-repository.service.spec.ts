import {TestBed} from '@angular/core/testing';

import {InstituteRepositoryService} from './institute-repository.service';

describe('InstituteRepositoryService', () => {
  let service: InstituteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
