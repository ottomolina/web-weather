import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslatePipe,
    TranslateDirective
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
