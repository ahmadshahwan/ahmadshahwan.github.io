import {TestBed} from '@angular/core/testing';

import {LinkRepositoryService} from './link-repository.service';

describe('LinkRepositoryService', () => {
  let service: LinkRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
