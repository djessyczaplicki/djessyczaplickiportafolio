import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images: String[] = [
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
  ];
}
