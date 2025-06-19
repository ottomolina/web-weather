import { Component, Input } from '@angular/core';
import { HourlyWeather } from '../../models/hourly-weather.model';
import { HourlyUnits } from '../../models/weater.model';

@Component({
  selector: 'app-item-hour-weather',
  templateUrl: './item-hour-weather.component.html',
  styleUrl: './item-hour-weather.component.css'
})
export class ItemHourWeatherComponent {
  @Input() public hourlyWeather: HourlyWeather;
  @Input() public hourlyUnits: HourlyUnits;
}
