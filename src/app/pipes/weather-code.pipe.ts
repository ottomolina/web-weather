import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherCode'
})
export class WeatherCodePipe implements PipeTransform {

  transform(value: number): string {
    let tipoClima = '';
    if (value === 0) {
      tipoClima = 'Clear';
    } else if ([1, 2, 3].findIndex(e => e === value) > -1) {
      tipoClima = 'Partly cloudy';
    } else if ([45, 48].findIndex(e => e === value) > -1) {
      tipoClima = 'Fog';
    } else if ([51, 53, 55].findIndex(e => e === value) > -1) {
      tipoClima = 'Drizzle';
    } else if ([56, 57].findIndex(e => e === value) > -1) {
      tipoClima = 'Freezing drizzle';
    } else if ([61, 63, 65].findIndex(e => e === value) > -1) {
      tipoClima = 'Rain';
    } else if ([66, 67].findIndex(e => e === value) > -1) {
      tipoClima = 'Freezing rain';
    } else if ([71, 73, 75].findIndex(e => e === value) > -1) {
      tipoClima = 'Snowfall';
    } else if (value === 77) {
      tipoClima = 'Hail';
    } else if ([80, 81, 82].findIndex(e => e === value) > -1) {
      tipoClima = 'Rain showers';
    } else if ([85, 86].findIndex(e => e === value) > -1) {
      tipoClima = 'Snow showers';
    } else if (value === 95) {
      tipoClima = 'Thunderstorm';
    } else if ([96, 99].findIndex(e => e === value) > -1) {
      tipoClima = 'Thunderstorm with hail';
    }
    return tipoClima;
  }

}
