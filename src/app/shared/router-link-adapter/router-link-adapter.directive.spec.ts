import {RouterLinkAdapterDirective} from './router-link-adapter.directive';
import {TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';

describe('RouterLinkAdapterDirective', () => {
  it('should create an instance', () => {
    const directive = new RouterLinkAdapterDirective(TestBed.inject(Router));
    expect(directive).toBeTruthy();
  });
});
