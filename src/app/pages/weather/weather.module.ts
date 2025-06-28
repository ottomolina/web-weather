import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderModule } from '../../components/header/header.module';
import { CardCurrentWeatherModule } from '../../components/card-current-weather/card-current-weather.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { CarrouselCardModule } from '../../components/carrousel-card/carrousel-card.module';
import { CarrouselTabsModule } from '../../components/carrousel-tabs/carrousel-tabs.module';
import { ListHourWeatherModule } from '../../components/list-hour-weather/list-hour-weather.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HeaderModule,
    CardCurrentWeatherModule,
    CarrouselCardModule,
    CarrouselTabsModule,
    ListHourWeatherModule,
  ]
})
export class WeatherModule { }
