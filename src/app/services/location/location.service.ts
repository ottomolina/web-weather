import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Place } from '../../models/place.model';
import { IpExternal } from '../../models/ip-external.model';
import { CountryIpAddress } from '../../models/country-ip-address.model';
import { Weather } from '../../models/weater.model';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  public getListPlaces(place: string): Observable<Array<Place>> {
    let url = `${environment.urlPlaces}`;
    url = url.replace('{place}', encodeURIComponent(place));
    return this.http.get<Array<Place>>(url);
  }

  public getIpAddress(): Observable<IpExternal> {
    return this.http.get<IpExternal>(environment.urlDetectIp);
  }

  public getCountryFromIpAddress(ip: string): Observable<CountryIpAddress> {
    return this.http.get<CountryIpAddress>(`${environment.urlCountryIpAddress}${ip}`);
  }

  public getWeatherByCoords(latitude: string, longitude: string): Observable<Weather> {
    let url = `${environment.urlWeather}`;
    url = url.replace('{lat}', encodeURIComponent(latitude));
    url = url.replace('{lon}', encodeURIComponent(longitude));
    return this.http.get<Weather>(url);
  }

}
