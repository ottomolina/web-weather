import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weater.model';
import { DailyWeather } from '../../models/daily-weather.model';
import { HourlyWeather } from '../../models/hourly-weather.model';
import { Place } from '../../models/place.model';

interface LinkRange {
  text: string;
  active: boolean;
  code: number;
}

@Component({
  selector: 'app-range-daily-weather',
  templateUrl: './range-daily-weather.component.html',
  styleUrl: './range-daily-weather.component.css'
})
export class RangeDailyWeatherComponent implements OnInit {
  @Input() weather: Weather;
  @Input() place: Place;

  public linksRange: Array<LinkRange> = [];
  public listDailyWeather: Array<DailyWeather>;
  public initialSlice: number = 0;
  public finalSlice: number = 7;
  
  public listByHour: Array<HourlyWeather> = [];
  public itemDaySelected: DailyWeather;

  constructor() {
    this.linksRange.push({ text: 'El tiempo 1 - 7 días', active: true, code: 0 });
    this.linksRange.push({ text: '8 - 14 días', active: false, code: 7 });
  }

  ngOnInit(): void {
    this.showRangeDays()
  }

  public clickRange(item: LinkRange) {
    if(item.active) {
      return;
    }
    this.linksRange
        .filter(e => e.code !== item.code)
        .every(e => e.active = false);
    item.active = true;
  }

  public showRangeDays(initial: number = 0, final: number = 14) {
    this.listDailyWeather = [];
    const daily = this.weather.daily;
    let i = initial;
    while(i < final) {
      const item: DailyWeather = {
        date: daily.time[i],
        precipitation_sum: daily.precipitation_sum[i],
        precipitation_probability_max: daily.precipitation_probability_max[i],
        weather_code: daily.weather_code[i],
        temperature_2m_max: daily.temperature_2m_max[i],
        temperature_2m_min: daily.temperature_2m_min[i],
        active: false,
        time: daily.time[i],
        sunrise: daily.sunrise[i],
        sunset: daily.sunset[i],
        wind_direction_10m: daily.wind_direction_10m_dominant[i],
        wind_gusts_10m_min: daily.wind_gusts_10m_min[i],
        wind_gusts_10m_max: daily.wind_gusts_10m_max[i],
      };
      this.listDailyWeather.push(item);
      i++;
    }
    this.clickCardDay(this.listDailyWeather[0]);
  }

  public clickBtnPrevNext(index: number) {
    this.initialSlice = index;
    this.finalSlice = this.initialSlice+7;
    const itemRange = this.linksRange.filter(item => item.code === index)[0];
    this.clickRange(itemRange);
    this.setActiveItem(index);
    this.clickCardDay(this.listDailyWeather[index]);
  }

  private setActiveItem(index: number) {
    this.listDailyWeather[index].active = true;
  }

  public selectItemCard(itemSelected: DailyWeather) {
    this.listDailyWeather.forEach(e => e.active = false);
    itemSelected.active = true;
  }

  public clickCardDay(itemSelected: DailyWeather) {
    this.selectItemCard(itemSelected);

    this.itemDaySelected = itemSelected;
    this.listByHour = [];
    let i=0;
    while(i < this.weather.hourly.time.length && this.listByHour.length < 24) {
      const { time, temperature_2m, apparent_temperature, wind_speed_10m, wind_gusts_10m, relative_humidity_2m,
              wind_direction_10m, precipitation, precipitation_probability, weather_code } = this.weather.hourly;
      const timeElement = time[i].split('T');
      if(timeElement[0] === itemSelected.time) {
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
          isDay: new Date(time[i]) > new Date(itemSelected.sunrise) && new Date(time[i]) < new Date(itemSelected.sunset) ? 1 : 0
        }
        this.listByHour.push(item);
      }
      i++;
    }
  }

}
