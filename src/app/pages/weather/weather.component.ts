import { Component } from '@angular/core';
import { Place } from '../../models/place.model';
import { Weather } from '../../models/weater.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocationService } from '../../services/location/location.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  public isLoading: boolean = true;
  public place: Place;
  public weather: Weather;
  public time: string;

  constructor(
    private spinner: NgxSpinnerService,
    private locationService: LocationService
  ) {  }

  async selectPlace(event: Place) {
    try {
      this.isLoading = true;
      await this.spinner.show();
      this.place = event
      
      this.weather = await firstValueFrom(
        this.locationService.getWeatherByCoords(this.place.lat, this.place.lon)
      );

    } catch(error) {
      console.error('error', error);
      alert('Ocurrió un inconveniente al realizar esta acción.');
    } finally {
      this.isLoading = false;
      await this.spinner.hide();
    }
  }

  public cardSelect(event: any) {
    this.time = event;
  }
  
  public tabSelect(event: any) {
    this.time = event;
  }
}
