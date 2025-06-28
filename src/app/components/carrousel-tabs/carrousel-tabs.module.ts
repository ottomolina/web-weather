import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselTabsComponent } from './carrousel-tabs.component';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    CarrouselTabsComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    CarrouselTabsComponent
  ],
})
export class CarrouselTabsModule { }
