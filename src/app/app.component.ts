import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  imageUrl =
    'https://media-exp1.licdn.com/dms/image/C4E03AQEoRHS-fpsEXQ/profile-displayphoto-shrink_800_800/0/1656419050430?e=1663200000&v=beta&t=KAFELlhY8Dp77NHq-dlfwGH6xYbYbeVYc3XJv5E9WzM';

  components!: MenuItem[];
  @ViewChild('particles') particles!: ElementRef;

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

    let el = this.particles.nativeElement;
    el.setAttribute('style', 'z-index: -1');
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

  particlesOptions = {
    fullscreen: {
      enable: false,
    },
    background: {
      color: {
        value: '#17212f',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
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
          distance: 100,
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
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
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
