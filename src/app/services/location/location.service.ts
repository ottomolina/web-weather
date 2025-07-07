import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Place } from '../../models/place.model';
import { CountryIpAddress } from '../../models/country-ip-address.model';
import { Weather } from '../../models/weater.model';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) { }

  public getListPlaces(place: string): Observable<Array<Place>> {
    let url = `${environment.urlPlaces}`;
    url = url.replace('{place}', encodeURIComponent(place));
    url = url.replace('{lang}', this.translate.currentLang);
    return this.http.get<Array<Place>>(url,{responseType:'json'});
  }

  public getCountryFromIpAddress(): Observable<CountryIpAddress> {
    return this.http.get<CountryIpAddress>(`${environment.urlCountryIpAddress}`);
  }

  public getWeatherByCoords(latitude: string, longitude: string): Observable<Weather> {
    let url = `${environment.urlWeather}`;
    url = url.replace('{lat}', encodeURIComponent(latitude));
    url = url.replace('{lon}', encodeURIComponent(longitude));

    const tempUnit = this.translate.instant('temperature.unit');
    const windUnit = this.translate.instant('wind.unit');
    if(tempUnit) {
      url += `&temperature_unit=${tempUnit}`;
    }
    url += `&wind_speed_unit=${windUnit}`;

    return this.http.get<Weather>(url);
  }

}
