import {TestBed} from '@angular/core/testing';

import {CareerRepositoryService} from './career-repository.service';

describe('CareerRepositoryService', () => {
  let service: CareerRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
