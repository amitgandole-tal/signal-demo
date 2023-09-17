import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengerousQualityComponent } from './dengerous-quality.component';

describe('DengerousQualityComponent', () => {
  let component: DengerousQualityComponent;
  let fixture: ComponentFixture<DengerousQualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DengerousQualityComponent]
    });
    fixture = TestBed.createComponent(DengerousQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
