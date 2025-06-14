import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';
import { WeatherCodeIconPipe } from './weather-code-icon.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { DayAndMonth } from './day-and-month.pipe';
import { WindDirectionIconPipe } from './wind-direction-icon.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
        WindDirectionIconPipe,
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
        WindDirectionIconPipe,
    ],
})

export class PipesModule {}