import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent {
  projectsReady = false;

  projects = [
    {
      code: 'RAAA-01',
      title: 'GELI - Institutional Lab Equipment Manager',
      description:
        'Angular-based system for managing lab equipment, sessions, and reports in academic institutions. Includes role-based access, traceability, dynamic charts, and export features.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/geli',
    },
    {
      code: 'RAAA-02',
      title: 'SecureAuth - HMAC-Salted Authentication System',
      description:
        'Backend authentication system using FastAPI, PostgreSQL, and SQLAlchemy with PBKDF2-HMAC-SHA256, user-level salt, and credential integrity via HMAC. Deployed with Docker and documented through Swagger.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/secure_auth',
    },
    {
      code: 'RAAA-03',
      title: 'SecureAuth Frontend - Encrypted Login UI',
      description:
        'Angular frontend for SecureAuth with HMAC-based credential integrity, reactive forms, visual feedback, and secure communication with the backend. Deployed on Railway.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/secure-auth-frontend',
    },
    {
      code: 'RAAA-04',
      title: 'Lanceros Stereo 94.1 FM - Radio Landing Page',
      description:
        'Angular 17 landing page with SSR and zoneless rendering for a community radio station. Includes live audio streaming with animated canvas, responsive layout, and CI/CD deployment on Vercel.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/lanceros-landing',
    },
    {
      code: 'RAAA-05',
      title: 'Lanceros Stereo - Cuñas Scheduler',
      description:
        'Desktop app for scheduling radio ads in 30-min blocks with HUD overlay and Flask microservice to broadcast current playing song. Built with Python, Tkinter and Flask.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/lanceros-ad-scheduler',
    },
    {
      code: 'RAAA-06',
      title: 'Service Portfolio',
      description:
        'A stylized Angular portfolio themed after Metal Gear Solid, featuring codec animations, cassette-style service cards, and iDroid-style expandable sections.',
      status: 'active',
      link: 'https://github.com/juanitomanoplateada/service-portfolio',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.projectsReady = true;
    }, 500);
  }
}
