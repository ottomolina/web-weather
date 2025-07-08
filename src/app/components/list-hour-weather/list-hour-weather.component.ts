import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Weather } from '../../models/weater.model';
import { Place } from '../../models/place.model';
import { HourlyWeather } from '../../models/hourly-weather.model';

@Component({
  selector: 'app-list-hour-weather',
  templateUrl: './list-hour-weather.component.html',
  styleUrl: './list-hour-weather.component.css'
})
export class ListHourWeatherComponent implements OnInit, OnChanges {
  @Input() public weather: Weather;
  @Input() public place: Place;
  @Input() public time: string;

  public listByHour: Array<HourlyWeather> = [];

  public ngOnInit(): void {
    this.fillListByHour();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { time } = changes;
    if(!time.firstChange) {
      this.fillListByHour()
    }
  }

  public fillListByHour() {
    const index = this.weather.daily.time.findIndex((e:string) => e === this.time);
    this.listByHour = [];
    let i = 0;
    while (i < this.weather.hourly.time.length && this.listByHour.length < 24) {
      const { time, temperature_2m, apparent_temperature, wind_speed_10m, wind_gusts_10m, relative_humidity_2m,
        wind_direction_10m, precipitation, precipitation_probability, weather_code } = this.weather.hourly;
      const timeElement = time[i].split('T');
      if (timeElement[0] === this.time) {
        const item: HourlyWeather = {
          time: timeElement[1],
          temperature_2m: temperature_2m[i],
          apparent_temperature: apparent_temperature[i],
          wind_speed_10m: wind_speed_10m[i],
          wind_gusts_10m: wind_gusts_10m[i],
          wind_direction_10m: wind_direction_10m[i],
          relative_humidity_2m: relative_humidity_2m[i],
          precipitation: precipitation[i],
          precipitation_probability: precipitation_probability[i],
          weather_code: weather_code[i],
          isDay: this.calculateIsDay(time[i], index)
        }
        this.listByHour.push(item);
      }
      i++;
    }
  }

  private calculateIsDay(time: string, indexInfoDay: number) {
    return new Date(time) > new Date(this.weather.daily.sunrise[indexInfoDay])
      && new Date(time) < new Date(this.weather.daily.sunset[indexInfoDay]) ? 1 : 0
  }

}
