import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetIconComponent } from './bet-icon.component';

describe('BetIconComponent', () => {
  let component: BetIconComponent;
  let fixture: ComponentFixture<BetIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
