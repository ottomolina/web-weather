import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from '../../models/weater.model';
import { Place } from '../../models/place.model';
import { DailyWeather } from '../../models/daily-weather.model';

@Component({
  selector: 'app-carrousel-card',
  templateUrl: './carrousel-card.component.html',
  styleUrl: './carrousel-card.component.css'
})
export class CarrouselCardComponent implements OnInit {
  @Input() weather: Weather;
  @Input() place: Place;
  @Output() onCardSelect = new EventEmitter<string>();

  public listDailyWeather: Array<DailyWeather>;
  public initialSlice: number = 0;
  public finalSlice: number = 7;

  ngOnInit(): void {
    this.showRangeDays()
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

  public selectItemCard(itemSelected: DailyWeather) {
    this.listDailyWeather.forEach(e => e.active = false);
    itemSelected.active = true;
  }

   public clickBtnPrevNext(index: number) {
    this.initialSlice = index;
    this.finalSlice = this.initialSlice+7;
    this.clickCardDay(this.listDailyWeather[index]);
  }

  public clickCardDay(item: DailyWeather) {
    this.selectItemCard(item);
    this.onCardSelect.emit(item.date);
  }

}
