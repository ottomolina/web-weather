import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHourWeatherComponent } from './item-hour-weather.component';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslatePipe } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ItemHourWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    TranslatePipe,
  ],
  exports: [
    ItemHourWeatherComponent
  ],
})
export class ItemHourWeatherModule { }
