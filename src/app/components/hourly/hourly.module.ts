import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourlyComponent } from './hourly.component';
import { HeaderModule } from '../header/header.module';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    HourlyComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    PipesModule,
  ],
  exports: [
    HourlyComponent
  ]
})
export class HourlyModule { }
