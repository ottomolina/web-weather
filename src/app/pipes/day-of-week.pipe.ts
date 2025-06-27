import { Pipe, PipeTransform } from "@angular/core";

const nameDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

@Pipe({
    name: 'dayOfWeek'
})
export class DayOfWeek implements PipeTransform {

    transform(time?: string, card?: boolean, withDate?: boolean) {

        const date = this.transformIntoDate(time);
        if(card) {
            if(this.compareDates(date, this.transformIntoDate())) {
                return 'Hoy';
            }
            if(this.compareDates(date, this.transformIntoDate(undefined, 1))) {
                return 'Mañana';
            }
        }
        let day = withDate
            ? `${nameDays[date.getDay()].substring(0,3)} ${date.getDate()}`
            : nameDays[date.getDay()];
        return day;
    }

    transformIntoDate(time?: string, addDay: number = 0) {
        const date = new Date(
            (time ? new Date(`${time}T00:00:00`) : new Date())
            .toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
        );
        date.setDate(date.getDate()+addDay)
        return date;
    }

    compareDates(date1: Date, date2: Date) {
        return (
            date1.getDate() == date2.getDate() &&
            date1.getMonth() == date2.getMonth() &&
            date1.getFullYear() == date2.getFullYear()
        )
    }

}