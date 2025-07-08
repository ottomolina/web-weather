import { Component } from '@angular/core';
import { ToastService } from './components/toast/toast.service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(
    public toastService: ToastService,
    private translate: TranslateService,
    private title: Title,
  ) {
    setTimeout(() => {
      this.title.setTitle(this.translate.instant('app.title'));
    }, 100);
  }
}
