import {TestBed} from '@angular/core/testing';

import {PageStateService} from './page-state.service';

describe('LinkService', () => {
  let service: PageStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
