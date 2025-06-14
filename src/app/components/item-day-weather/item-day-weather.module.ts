import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDayWeatherComponent } from './item-day-weather.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    ItemDayWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ItemDayWeatherComponent
  ]
})
export class ItemDayWeatherModule { }
