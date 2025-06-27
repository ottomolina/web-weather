import { Component, Input, OnInit } from '@angular/core';
import { HourlyWeather } from '../../models/hourly-weather.model';
import { Place } from '../../models/place.model';
import { Weather } from '../../models/weater.model';

interface TabItem {
    time: string;
    active?: boolean;
}
@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrl: './hourly.component.css'
})
export class HourlyComponent implements OnInit {
    @Input() public place: Place;
    @Input() public weather: Weather;
    public listTime: Array<TabItem> = [];
    public infoDay: any;

    public listByHour: Array<HourlyWeather> = [];
    private timeSelected: string;

    constructor() { }
    
    ngOnInit() {
        this.weather.daily.time.forEach(e => {
            this.listTime.push({time: e, active: false});
        });
        this.selectDay(this.listTime[0]);
    }

    public selectDay(item: TabItem) {
        this.listTime.forEach(e => e.active = false);
        this.listTime.filter(e => e.time === item.time)[0].active = true;
        this.timeSelected = item.time;
        const index = this.weather.daily.time.findIndex((e:string) => e === item.time);
        this.infoDay = {
            weather_code: this.weather.daily.weather_code[index],
            date: item.time
        }
        this.fillListByHour(index);
    }

    public fillListByHour(index:number) {
        this.listByHour = [];
        let i=0;
        while(i < this.weather.hourly.time.length && this.listByHour.length < 24) {
            const { time, temperature_2m, apparent_temperature, wind_speed_10m, wind_gusts_10m, relative_humidity_2m,
                    wind_direction_10m, precipitation, precipitation_probability, weather_code } = this.weather.hourly;
            const timeElement = time[i].split('T');
            if(timeElement[0] === this.timeSelected) {
                const item: HourlyWeather = {
                    time: timeElement[1],
                    temperature_2m: temperature_2m[i],
                    apparent_temperature: apparent_temperature[i],
                    wind_speed_10m: wind_speed_10m[i],
                    wind_gusts_10m: wind_gusts_10m[i],
                    wind_direction_10m: wind_direction_10m[i],
                    relative_humidity_2m: relative_humidity_2m[i],
                    precipitation: precipitation[i],
                    precipitation_probability: precipitation_probability[i],
                    weather_code: weather_code[i],
                    isDay: this.calculateIsDay(time[i], index)
                }
                this.listByHour.push(item);
            }
            i++;
        }
    }

    private calculateIsDay(time: string, indexInfoDay: number) {
        return new Date(time) > new Date(this.weather.daily.sunrise[indexInfoDay])
            && new Date(time) < new Date(this.weather.daily.sunset[indexInfoDay]) ? 1 : 0
    }
}
