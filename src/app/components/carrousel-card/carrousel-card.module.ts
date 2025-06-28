import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselCardComponent } from './carrousel-card.component';
import { CardDayWeatherModule } from '../card-day-weather/card-day-weather.module';



@NgModule({
  declarations: [
    CarrouselCardComponent
  ],
  imports: [
    CommonModule,
    CardDayWeatherModule
  ],
  exports: [
    CarrouselCardComponent
  ],
})
export class CarrouselCardModule { }
