import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';
import { WeatherCodeIconPipe } from './weather-code-icon.pipe';
import { FormatNumberPipe } from './format-number.pipe';
import { DayAndMonth } from './day-and-month.pipe';
import { WindDirectionIconPipe } from './wind-direction-icon.pipe';
import { WindDirectionPipe } from './wind-direction.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
        WindDirectionIconPipe,
        WindDirectionPipe,
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe,
        DayAndMonth,
        WindDirectionIconPipe,
        WindDirectionPipe,
    ],
})

export class PipesModule {}