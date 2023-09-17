import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDashboardSignalsComponent } from './weather-dashboard-signals.component';

describe('WeatherDashboardSignalsComponent', () => {
  let component: WeatherDashboardSignalsComponent;
  let fixture: ComponentFixture<WeatherDashboardSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDashboardSignalsComponent]
    });
    fixture = TestBed.createComponent(WeatherDashboardSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
