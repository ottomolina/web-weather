import { NgModule } from '@angular/core';
import { DayOfWeek } from './day-of-week.pipe';

@NgModule({
    declarations: [
        DayOfWeek
    ],
    exports: [
        DayOfWeek
    ],
})

export class PipesModule {}