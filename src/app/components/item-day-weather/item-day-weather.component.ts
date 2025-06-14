import { Component, Input } from '@angular/core';
import { DailyWeather } from '../../models/daily-weather.model';
import { DailyUnits } from '../../models/weater.model';

@Component({
  selector: 'app-item-day-weather',
  templateUrl: './item-day-weather.component.html',
  styleUrl: './item-day-weather.component.css'
})
export class ItemDayWeatherComponent {
  @Input() public dailyWeather: DailyWeather;
  @Input() public dailyUnits: DailyUnits;
}
