import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PhdPresentationComponent} from './phd-presentation.component';

describe('PhdPresentationComponent', () => {
  let component: PhdPresentationComponent;
  let fixture: ComponentFixture<PhdPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
