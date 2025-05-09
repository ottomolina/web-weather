import { Pipe, PipeTransform } from "@angular/core";

const nameDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

@Pipe({
    name: 'dayOfWeek'
})
export class DayOfWeek implements PipeTransform {

    transform(time?: string) {
        const date = new Date(
            (time ? new Date(`${time}T00:00:00`) : new Date())
            .toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
        );
        return nameDays[date.getDay()];
    }

}