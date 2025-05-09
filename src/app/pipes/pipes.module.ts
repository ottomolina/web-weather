import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';
import { WeatherCodeIconPipe } from './weather-code-icon.pipe';
import { FormatNumberPipe } from './format-number.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe,
        FormatNumberPipe
    ],
})

export class PipesModule {}