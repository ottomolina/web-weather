import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Pipe({
    name: 'dayAndMonth'
})
export class DayAndMonth implements PipeTransform {

    constructor(
        public translate: TranslateService
    ) {}

    transform(time: string, formatMonth: 'short'|'long'='short') {
        const date = new Date(new Date(`${time}T00:00:00`)
            .toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
        );
        const fecha = date.toLocaleString(this.translate.currentLang, { month: formatMonth, day:'numeric' });
        return fecha;
    }

}