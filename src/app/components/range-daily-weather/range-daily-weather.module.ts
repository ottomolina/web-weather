import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDailyWeatherComponent } from './range-daily-weather.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CardDayWeatherModule } from '../card-day-weather/card-day-weather.module';
import { ItemHourWeatherModule } from '../item-hour-weather/item-hour-weather.module';
import { HourlyModule } from '../hourly/hourly.module';



@NgModule({
  declarations: [
    RangeDailyWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    CardDayWeatherModule,
    ItemHourWeatherModule,
    HourlyModule
  ],
  exports: [
    RangeDailyWeatherComponent
  ]
})
export class RangeDailyWeatherModule { }
