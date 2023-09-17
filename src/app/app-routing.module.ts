import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { WeatherDashboardSignalsComponent } from './weather-dashboard-signals/weather-dashboard-signals.component';
import { DengerousQualityComponent } from './dengerous-quality/dengerous-quality.component';

const routes: Routes = [
  { path: 'weather', component: WeatherDashboardComponent },
  { path: 'dangerous', component: DengerousQualityComponent },
  { path: 'weather-signal', component: WeatherDashboardSignalsComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', redirectTo: 'weather' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
