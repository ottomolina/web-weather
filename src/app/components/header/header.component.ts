import { Component, EventEmitter, Output } from '@angular/core';
import { LocationService } from '../../services/location/location.service';
import { firstValueFrom } from 'rxjs';
import { Place } from '../../models/place.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionstorageService } from '../../services/storage/sessionstorage.service';

const TRIGGER_BUSCAR = 750;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() onSelectPlace = new EventEmitter();

  private refTimeout: any;
  public showBox: boolean = false;

  public listPlaces: Array<Place> = [];

  constructor(
    private locationService: LocationService,
    private spinner: NgxSpinnerService,
    private sessionStorage: SessionstorageService
  ) {
    this.getCountryFromIp();
  }

  public async getCountryFromIp() {
    try {
      this.spinner.show();
      const ipObject = await firstValueFrom(this.locationService.getIpAddress())
      this.sessionStorage.ipAddressExternal = ipObject.ip;
      const countryObject = await firstValueFrom(this.locationService.getCountryFromIpAddress(ipObject.ip));
      this.sessionStorage.countryIpAddressExternal = countryObject.country;

      await this.searchingProcess(countryObject.country);
      const place = this.listPlaces[0];
      place && await this.selectPlace(place);
      
    } catch(error) {
      console.error('error', error);
      alert('Ocurrió un inconveniente al realizar esta acción.');
    } finally {
      this.spinner.hide();
    }
  }

  search(event: any) {
    clearTimeout(this.refTimeout);
    this.refTimeout = setTimeout(() => {
      if(event.target.value.trim() === '') {
        this.blurSearch();
        return;
      }
      this.searchingProcess(event.target.value);
    }, TRIGGER_BUSCAR);
  }

  async searchingProcess(place: string) {
    let list = await firstValueFrom(this.locationService.getListPlaces(place));
    this.listPlaces = [];
    list = list.filter((item:Place, index:number) => {
      return list.findIndex(e => e.display_name === item.display_name) === index;
    });
    this.listPlaces = list;
    this.listPlaces = [
      ...this.listPlaces.filter(e => e.display_name.toLocaleLowerCase().includes(this.sessionStorage.countryIpAddressExternal.toLocaleLowerCase())),
      ...this.listPlaces.filter(e => !e.display_name.toLocaleLowerCase().includes(this.sessionStorage.countryIpAddressExternal.toLocaleLowerCase()))
    ]
  }

  focusSearch() {
    setTimeout(() => {
      this.showBox = true;
    }, 100);
  }

  blurSearch() {
    setTimeout(() => {
      this.showBox = false;
    }, 100);
  }

  public selectPlace(item: Place) {
    this.onSelectPlace.emit(item);
  }

}
