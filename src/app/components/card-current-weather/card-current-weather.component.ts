import { Component, Input } from '@angular/core';
import { Place } from '../../models/place.model';
import { Weather } from '../../models/weater.model';

@Component({
  selector: 'app-card-current-weather',
  templateUrl: './card-current-weather.component.html',
  styleUrl: './card-current-weather.component.css'
})
export class CardCurrentWeatherComponent {
  @Input() place: Place;
  @Input() weather: Weather;

  public getCurrentHour() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let ret = hour < 10 ? `0${hour}` : `${hour}`;
    ret += ':' + (minute < 10 ? `0${minute}` : minute);
    return ret;
  }

}
