import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDashboardSignalsComponent } from './weather-dashboard-signals/weather-dashboard-signals.component';
import { DengerousQualityComponent } from './dengerous-quality/dengerous-quality.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent,
    WeatherDashboardSignalsComponent,
    DengerousQualityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
