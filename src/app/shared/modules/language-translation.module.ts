import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";

import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

const langs = [
    { name: 'English', lang: 'en' },
    { name: 'Spanish', lang: 'es' }
];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        })
    ],
    exports: [
        TranslateModule
    ]
})
export class LanguageTranslationModule {
    constructor(
        private translate: TranslateService
    ) {
        this.translate.addLangs(langs.map(el => el.lang));
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang()!;
        this.translate.use(langs.map(el => el.lang).findIndex(item => item == browserLang) != -1 ? browserLang : 'en');
    }
}