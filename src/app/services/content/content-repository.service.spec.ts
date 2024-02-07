import { TestBed } from '@angular/core/testing';

import { ContentRepositoryService } from './content-repository.service';

describe('ContentRepositoryService', () => {
  let service: ContentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
