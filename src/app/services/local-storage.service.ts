import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLanguage(): string {
    return localStorage.getItem('language') || 'en';
  }

  setLanguage(lang: string) {
    localStorage.setItem('language', lang);
  }
}
