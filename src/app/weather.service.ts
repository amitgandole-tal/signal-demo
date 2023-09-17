import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject, Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private cities = ['India', 'USA', 'UK'];

  temperature = signal(0);

  selectedCountry = signal('');

  dangerousPerc = computed(()=>{
    return (this.temperature() + 50)/100 
  });


  // Behaviour subject
  temperatureSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(0); // Initialize with a default value
  temperatureObs: Observable<number>;
  
  constructor(private http: HttpClient) {
    setInterval(() => {
      this.temperature.set(this.generateMockWeather(this.selectedCountry()));
    }, 1000);
    this.temperatureObs = this.temperatureSubject$.asObservable();
  }


  getWeatherUpdates(country: string): Observable<any> {
    return interval(1000).pipe(map(() => this.generateMockWeather(country)));
  }

  getWeatherUpdatesSignal(country: string) {}

  getWeather(input: string): Observable<any> {
    return of(29);
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization:
    //     'Bearer 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', // Replace with your actual OpenAI API key
    // });

    // const prompt = `Give me 2016 temperature of ${input} country. Give me only one number value`;
    // const body = JSON.stringify({
    //   prompt: prompt,
    //   max_tokens: 200, // Adjust the number of tokens based on your requirements
    //   temperature: 0.7, // Adjust the temperature to control the randomness of suggestions
    //   n: 10, // Number of suggestions to fetch
    //   model: 'text-davinci-003',
    // });

    // return this.http.post<any>('https://api.openai.com/v1/completions', body, {
    //   headers: headers,
    // });
  }
  

  private generateMockWeather(country: string) {
    let m = country == 'India' ? 20 : country === 'USA' ? 40 : 10;
    return Math.floor(Math.random() * m) + 10;
  }
}
