import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  title = 'Djessy Czaplicki - Portfolio';
  localStorageService!: LocalStorageService;
  selectedLanguage: string = "";

  constructor(public translate: TranslateService, localStorageService: LocalStorageService) {
    this.localStorageService = localStorageService;
    const lang = localStorageService.getLanguage();
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(lang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.localStorageService.setLanguage(lang);
  }
}
