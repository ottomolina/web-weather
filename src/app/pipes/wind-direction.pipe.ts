import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(value: number): string {
    let direction = '';
    if(value === 360) {
      direction = 'north';
    } else if(value > 0 && value < 90) {
      direction = 'northeast';
    } else if(value === 90) {
      direction = 'east';
    } else if(value > 90 && value < 180) {
      direction = 'southeast';
    } else if(value === 180) {
      direction = 'south';
    } else if(value > 180 && value < 270) {
      direction = 'southwest';
    } else if(value === 270) {
      direction = 'west';
    } else if(value > 270 && value < 360) {
      direction = 'northwest';
    }
    return direction;
  }

}
