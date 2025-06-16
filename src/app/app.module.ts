import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardCurrentWeatherModule } from './components/card-current-weather/card-current-weather.module';
import { RangeDailyWeatherModule } from './components/range-daily-weather/range-daily-weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    NgxSpinnerModule,
    CardCurrentWeatherModule,
    RangeDailyWeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }