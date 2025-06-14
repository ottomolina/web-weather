import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dayAndMonth'
})
export class DayAndMonth implements PipeTransform {

    transform(time: string) {
        const date = new Date(new Date(`${time}T00:00:00`)
            .toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
        );
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day} ${month}`;
    }

}