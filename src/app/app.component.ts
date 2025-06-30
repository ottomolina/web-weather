import { Component } from '@angular/core';
import { ToastService } from './components/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(
    public toastService: ToastService,
  ) { }
}
