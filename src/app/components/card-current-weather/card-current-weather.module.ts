import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCurrentWeatherComponent } from './card-current-weather.component';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslatePipe } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CardCurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    TranslatePipe
  ],
  exports: [
    CardCurrentWeatherComponent
  ]
})
export class CardCurrentWeatherModule { }
