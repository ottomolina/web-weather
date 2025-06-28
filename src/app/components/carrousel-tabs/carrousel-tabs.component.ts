import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '../../models/weater.model';

interface TabItem {
  time: string;
  active?: boolean;
}
@Component({
  selector: 'app-carrousel-tabs',
  templateUrl: './carrousel-tabs.component.html',
  styleUrl: './carrousel-tabs.component.css'
})
export class CarrouselTabsComponent {
  @Input() public weather: Weather;
  @Output() public onTabSelect = new EventEmitter<string>();

  public listTime: Array<TabItem> = [];

  constructor() { }

  ngOnInit() {
    this.weather.daily.time.forEach(e => {
      this.listTime.push({ time: e, active: false });
    });
    this.selectDay(this.listTime[0]);
  }

  public selectDay(item: TabItem) {
    this.listTime.forEach(e => e.active = false);
    this.listTime.filter(e => e.time === item.time)[0].active = true;
    this.onTabSelect.emit(item.time);
  }
}
