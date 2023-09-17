import { Component, computed, signal } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-dashboard-signals',
  templateUrl: './weather-dashboard-signals.component.html',
  styleUrls: ['./weather-dashboard-signals.component.scss'],
})
export class WeatherDashboardSignalsComponent {
  selectedCountry = 'India';

  constructor(public weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.weatherService.selectedCountry.set(this.selectedCountry);
  }

  // Function to handle dropdown selection
  onCountrySelect(e: any) {
    this.selectedCountry = e.target.value;
    this.weatherService.selectedCountry.set(this.selectedCountry);
  }

  checkDangerousQuality(e: Event) {
    e.preventDefault();
    this.router.navigate(['/dangerous'], { queryParams: { country: this.selectedCountry } });
  }
}
