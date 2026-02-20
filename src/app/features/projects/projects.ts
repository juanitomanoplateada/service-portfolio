import { Component } from '@angular/core';
import { BookShelfComponent } from '../../shared/components/book-shelf/book-shelf.component';
import { ProjectBook } from '../../shared/models/project-book.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BookShelfComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: ProjectBook[] = [
    {
      id: '1',
      title: 'Lanceros FM Online',
      subtitle: 'Sitio Web de Streaming',
      description: 'Solución integral de radiodifusión digital potenciada por Flask y Angular que orquesta la sincronización precisa de audio y metadatos. Integra Icecast y Zeno Media para garantizar una transmisión continua y escalable, gestionando la ingesta de audio desde consola (BUTT) y exponiendo información en tiempo real a través de APIs robustas.',
      technologies: ['Icecast', 'BUTT', 'Flask', 'Angular'],
      spineColor: '#02203fff',
      spineTextColor: '#ECF0F1',
      demoUrl: 'https://lancerosfm.online/',
      repoUrl: 'https://github.com/juanitomanoplateada/lanceros-stereo',
      galleryImages: [
        'lanceros/banner.png',
        'lanceros/desktop_preview.png']
    },
    {
      id: '2',
      title: 'GELI',
      subtitle: 'Gestor de Equipos de Laboratorio Institucional',
      description: 'Sistema institucional para el INCITEMA (UPTC) que administra permisos granulares de usuario para el acceso a equipos de laboratorio. Registra detalladamente la información de cada sesión operativa, asegurando la trazabilidad total mediante una arquitectura robusta en Oracle, Spring Boot, Keycloak y Angular.',
      technologies: ['Oracle', 'Spring Boot', 'Keycloak', 'Angular'],
      spineColor: '#af960bff',
      spineTextColor: '#ffffffff',
      galleryImages: [
        'geli/1.png',
        'geli/2.png',
        'geli/3.png',
        'geli/4.png',
        'geli/5.png',
        'geli/6.png'
      ]
    },
    {
      id: '3',
      title: 'RAAADIO',
      subtitle: 'Sistema de Automatización Radial',
      description: 'Solución de automatización radial de alto rendimiento para emisoras comunitarias. Construido en C++17 y JUCE 8, ofrece estabilidad industrial, motor de audio de alta fidelidad, y gestión avanzada de programación 24/7.',
      technologies: ['C++17', 'JUCE 8', 'SQLite3', 'CMake'],
      spineColor: '#E67E22',
      spineTextColor: '#ECF0F1',
      repoUrl: 'https://github.com/juanitomanoplateada/raaadio',
      galleryImages: [
        'raaadio/1.png',
        'raaadio/2.png',
        'raaadio/3.png',
        'raaadio/4.png',
        'raaadio/5.png',
        'raaadio/6.png'
      ]
    }
  ];
}
