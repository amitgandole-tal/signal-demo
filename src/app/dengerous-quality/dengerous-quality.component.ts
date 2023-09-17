import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dengerous-quality',
  templateUrl: './dengerous-quality.component.html',
  styleUrls: ['./dengerous-quality.component.scss'],
})
export class DengerousQualityComponent implements OnInit {
  selectedCountry: any;
  isFeatureEnabled: any;
  dangerousPerc: any;

  constructor(
    private route: ActivatedRoute,
    public weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedCountry = params['country'];
      this.updateForSignal();
      this.updateForObservable();
      this.weatherService.selectedCountry.set(this.selectedCountry);
    });
  }
  
  updateForSignal() {
    this.weatherService.temperatureObs.subscribe((val) => {
      this.dangerousPerc = (val + 50) / 100;
    });
  }

  updateForObservable() {
    this.weatherService
      .getWeatherUpdates(this.selectedCountry)
      .subscribe((updates) => {
        this.weatherService.temperatureSubject$.next(updates);
      });
  }

  // Function to handle dropdown selection
  onCountrySelect(e: any) {
    this.selectedCountry = e.target.value;
    this.weatherService.selectedCountry.set(this.selectedCountry);
  }

  toggleFeature() {
    this.isFeatureEnabled = !this.isFeatureEnabled;
  }
}
