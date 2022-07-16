import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from './services/local-storage.service';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedLanguage: string = '';

  components!: MenuItem[];

  ngOnInit(): void {
    this.components = [
      {
        label: 'bio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/bio',
      },
      {
        label: 'projects',
        icon: 'pi pi-fw pi-book',
        routerLink: '/projects',
      },
      {
        label: 'contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: 'contact',
      },
    ];
    this.components.forEach((component) =>
      this.translate
        .get(component.label!)
        .subscribe((text) => (component.label = text))
    );
  }

  constructor(
    public translate: TranslateService,
    private localStorageService: LocalStorageService
  ) {
    const lang = localStorageService.getLanguage();
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(lang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.localStorageService.setLanguage(lang);
  }

  id = 'tsparticles';

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
