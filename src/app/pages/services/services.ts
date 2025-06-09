import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
})
export class ServicesComponent {
  cassetesReady = false;

  cassettes = [
    {
      title: 'Web Development',
      tools: ['Angular', 'React', 'HTML', 'SCSS'],
    },
    {
      title: 'Backend Services',
      tools: ['Java', 'Spring Boot', 'Node.js', 'Python'],
    },
    {
      title: 'Database Management',
      tools: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Tools',
      tools: ['Git', 'Docker'],
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.cassetesReady = true;
    }, 500);
  }
}
