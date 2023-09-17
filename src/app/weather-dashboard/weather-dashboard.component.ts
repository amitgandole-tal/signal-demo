import { Component, signal } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent {
  temperature!: any;

  selectedCountry = 'India';

  dangerousPerc = 0;

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.loadWeatherData();
    this.weatherService.temperatureObs.subscribe(val=>{
      this.dangerousPerc = (val + 50)/100 
    });
  }

  loadWeatherData() {
    this.weatherService
      .getWeatherUpdates(this.selectedCountry)
      .subscribe((updates) => {
        this.temperature = updates; // this.getTemp(JSON.stringify(updates));
        this.weatherService.temperatureSubject$.next(this.temperature);
      });
  }

  getTemp(response: string): string {
    const responseObject = JSON.parse(response);

    if (
      responseObject &&
      responseObject.choices &&
      responseObject.choices.length > 0
    ) {
      const firstChoice = responseObject.choices[0].text;
      const temperature = firstChoice.trim();

      return temperature;
    } else {
      return 'Temperature not found';
    }
  }

  // Function to handle dropdown selection
  onCountrySelect(e: any) {
    this.selectedCountry = e.target.value;
    this.temperature = '';
    this.loadWeatherData();
  }

  checkDangerousQuality(e: Event) {
    e.preventDefault();
    this.router.navigate(['dangerous'], { queryParams: { country: this.selectedCountry } });
  }
}
