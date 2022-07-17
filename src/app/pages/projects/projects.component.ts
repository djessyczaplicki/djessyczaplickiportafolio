import { Component, OnInit } from '@angular/core';

interface Project {
  images: string[];
  name: string;
  description: string;
  features: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor() {}

  projects: Project[] = [
    {
      name: 'group-calendar',
      images: [
        './assets/img/projects/groupcalendar1.png',
        './assets/img/projects/groupcalendar2.png',
        './assets/img/projects/groupcalendar3.png',
      ],
      description: 'group-calendar-description',
      features: 'group-calendar-features',
      github: 'https://github.com/djessyczaplicki/GroupCalendar',
    },
    {
      name: 'deliicious',
      images: [
        './assets/img/projects/deliicious1.png',
        './assets/img/projects/deliicious2.png',
        './assets/img/projects/deliicious3.png',
      ],
      description: 'deliicious-description',
      features: 'deliicious-features',
      github: 'https://github.com/ModuloInterLunar/deliiciousWaitress',
    },
    {
      name: 'app-rutas',
      images: [
        './assets/img/projects/apprutas1.png',
        './assets/img/projects/apprutas2.png',
        './assets/img/projects/apprutas3.png',
      ],
      description: 'app-rutas-description',
      features: 'app-rutas-features',
      github: 'https://github.com/djessyczaplicki/apprutas',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1250px',
      numVisible: 2,
    },
  ];
}
