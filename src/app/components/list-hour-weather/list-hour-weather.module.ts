import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHourWeatherComponent } from './list-hour-weather.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ItemHourWeatherModule } from '../item-hour-weather/item-hour-weather.module';
import { TranslatePipe } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListHourWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ItemHourWeatherModule,
    TranslatePipe
  ],
  exports: [
    ListHourWeatherComponent
  ]
})
export class ListHourWeatherModule { }
