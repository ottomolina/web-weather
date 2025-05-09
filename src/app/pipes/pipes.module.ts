import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';
import { WeatherCodeIconPipe } from './weather-code-icon.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe,
        WeatherCodeIconPipe
    ],
})

export class PipesModule {}