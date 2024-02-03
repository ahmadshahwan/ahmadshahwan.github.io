import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideBarMenuItemComponent} from './side-bar-menu-item.component';

describe('SideBarMenuItemComponent', () => {
  let component: SideBarMenuItemComponent;
  let fixture: ComponentFixture<SideBarMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
