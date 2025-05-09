import { Component } from '@angular/core';
import { Place } from './models/place.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Weather } from './models/weater.model';
import { firstValueFrom } from 'rxjs';
import { LocationService } from './services/location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

    } catch(error) {
      console.error('error', error);
      alert('Ocurrió un inconveniente al realizar esta acción.');
    } finally {
      this.isLoading = false;
      await this.spinner.hide();
    }
  }
}
