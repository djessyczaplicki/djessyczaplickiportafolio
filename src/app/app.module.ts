import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from './shared/shared.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, HorizontalCardComponent, BioComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgParticlesModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
