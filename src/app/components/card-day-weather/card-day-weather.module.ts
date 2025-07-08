import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDayWeatherComponent } from './card-day-weather.component';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    CardDayWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CardDayWeatherComponent
  ],
})
export class CardDayWeatherModule { }
