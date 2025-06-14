import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDailyWeatherComponent } from './range-daily-weather.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CardDayWeatherModule } from '../card-day-weather/card-day-weather.module';
import { ItemDayWeatherModule } from '../item-day-weather/item-day-weather.module';



@NgModule({
  declarations: [
    RangeDailyWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    CardDayWeatherModule,
    ItemDayWeatherModule,
  ],
  exports: [
    RangeDailyWeatherComponent
  ]
})
export class RangeDailyWeatherModule { }
