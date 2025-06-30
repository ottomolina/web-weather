import { Injectable } from '@angular/core';

declare var bootstrap: any;
@Injectable({
    providedIn: 'root'
})
export class ToastService {
    public class: string = 'text-bg-primary';
    public message: string = '';

    constructor() { }

    private show(message: string) {
        this.message = message;
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
    }

    info(message: string) {
        this.class = 'text-bg-primary';
        this.show(message);
    }

    error(message: string) {
        this.class = 'text-bg-danger';
        this.show(message);
    }
}