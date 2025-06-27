import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderModule } from '../../components/header/header.module';
import { CardCurrentWeatherModule } from '../../components/card-current-weather/card-current-weather.module';
import { RangeDailyWeatherModule } from '../../components/range-daily-weather/range-daily-weather.module';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HeaderModule,
    CardCurrentWeatherModule,
    RangeDailyWeatherModule,
  ]
})
export class WeatherModule { }
