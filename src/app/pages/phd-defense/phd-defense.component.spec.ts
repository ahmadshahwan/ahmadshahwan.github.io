import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PhdDefenseComponent} from './phd-defense.component';

describe('PhdDefenseComponent', () => {
  let component: PhdDefenseComponent;
  let fixture: ComponentFixture<PhdDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhdDefenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
