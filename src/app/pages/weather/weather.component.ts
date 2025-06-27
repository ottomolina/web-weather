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
  public placeSelected: Place;
  public weather: Weather;

  constructor(
    private spinner: NgxSpinnerService,
    private locationService: LocationService
  ) {  }

  async selectPlace(event: Place) {
    try {
      this.isLoading = true;
      await this.spinner.show();
      this.placeSelected = event
      
      this.weather = await firstValueFrom(
        this.locationService.getWeatherByCoords(this.placeSelected.lat, this.placeSelected.lon)
      );
      console.log('weather', this.weather);

    } catch(error) {
      console.error('error', error);
      alert('Ocurrió un inconveniente al realizar esta acción.');
    } finally {
      this.isLoading = false;
      await this.spinner.hide();
    }
  }
}
