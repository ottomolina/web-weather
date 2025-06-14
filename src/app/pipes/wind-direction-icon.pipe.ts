import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirectionIcon'
})
export class WindDirectionIconPipe implements PipeTransform {

  transform(value: number): string {
    let styleClass = '';
    if(value === 360) {
      styleClass = 'wind-south';
    } else if(value > 0 && value < 90) {
      styleClass = 'wind-southwest';
    } else if(value === 90) {
      styleClass = 'wind-west';
    } else if(value > 90 && value < 180) {
      styleClass = 'wind-northwest';
    } else if(value === 180) {
      styleClass = 'wind-north';
    } else if(value > 180 && value < 270) {
      styleClass = 'wind-northeast';
    } else if(value === 270) {
      styleClass = 'wind-east';
    } else if(value > 270 && value < 360) {
      styleClass = 'wind-south-east';
    }
    return styleClass;
  }

}
