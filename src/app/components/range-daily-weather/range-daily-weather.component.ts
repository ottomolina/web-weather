import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weater.model';
import { DailyWeather } from '../../models/daily-weather.model';

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

  public linksRange: Array<LinkRange> = [];
  public listDailyWeather: Array<DailyWeather>;
  public initialSlice: number = 0;
  public finalSlice: number = 7;

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
        active: i === initial,
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
  }

  public clickBtnPrevNext(index: number) {
    this.initialSlice = index;
    this.finalSlice = this.initialSlice+7;
    const itemRange = this.linksRange.filter(item => item.code === index)[0];
    this.clickRange(itemRange);
    this.setActiveItem(index)
  }

  private setActiveItem(index: number) {
    this.listDailyWeather[index].active = true;
  }

}
