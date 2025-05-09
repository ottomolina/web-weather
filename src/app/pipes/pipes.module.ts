import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';
import { WeatherCodePipe } from './weather-code.pipe';

@NgModule({
    declarations: [
        DayOfWeek,
        WeatherCodePipe
    ],
    exports: [
        DayOfWeek,
        WeatherCodePipe
    ],
})

export class PipesModule {}