import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';
import { WeatherCodeIconPipe } from './weather-code-icon.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { DayAndMonth } from './day-and-month.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
    ],
})

export class PipesModule {}