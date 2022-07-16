import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    CalendarModule,
    CardModule,
    DropdownModule,
    ImageModule,
    InputTextModule,
    MenuModule,
    MessageModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RippleModule,
    TabMenuModule,
  ]
})
export class PrimeNgModule { }
