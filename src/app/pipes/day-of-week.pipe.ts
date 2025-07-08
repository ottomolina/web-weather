import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Pipe({
    name: 'dayOfWeek'
})
export class DayOfWeek implements PipeTransform {

    constructor(
        public translate: TranslateService
    ) {}

    transform(time?: string, card?: boolean, withDate?: boolean) {

        const date = this.transformIntoDate(time);
        if(card) {
            if(this.compareDates(date, this.transformIntoDate())) {
                return this.translate.instant('today');
            }
            if(this.compareDates(date, this.transformIntoDate(undefined, 1))) {
                return this.translate.instant('tomorrow');
            }
        }
        const options:any = { weekday: withDate ? 'short':'long' };
        withDate && (options.day = '2-digit');
        let day = date.toLocaleDateString(this.translate.currentLang, options);
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