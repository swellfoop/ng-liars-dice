import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCarouselComponent } from './bet-carousel.component';

describe('CarouselComponent', () => {
  let component: BetCarouselComponent;
  let fixture: ComponentFixture<BetCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
