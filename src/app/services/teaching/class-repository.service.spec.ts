import {TestBed} from '@angular/core/testing';

import {ClassRepositoryService} from './class-repository.service';

describe('ClassRepositoryService', () => {
  let service: ClassRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
