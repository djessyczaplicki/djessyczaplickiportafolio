import { Component, OnInit } from '@angular/core';

interface Project {
  images: string[];
  name: string;
  description: string;
  features: string;
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
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
      ],
      description: 'group-calendar-description',
      features: 'group-calendar-features',
    },
    {
      name: 'deliicious',
      images: [
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
        './assets/img/projects/Captura1.png',
        './assets/img/projects/Captura2.png',
        './assets/img/projects/Captura3.png',
      ],
      description: 'deliicious-description',
      features: 'deliicious-features',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1250px',
      numVisible: 3,
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
    },
  ];
}
