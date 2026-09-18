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
      title: 'LancerosFM',
      subtitle: 'Sitio Oficial de Radio en Vivo',
      description: 'Sitio oficial de Lanceros Stereo 94.1 FM, emisora comunitaria de Tuta, Boyacá. Aplicación Angular prerenderizada y sin backend propio: el reproductor sobrevive a la navegación, la canción al aire llega por Server-Sent Events desde la cadena Icecast/Zeno Media y MediaSession la lleva a la pantalla de bloqueo. Instalable como PWA.',
      technologies: ['Angular 22', 'TypeScript', 'PWA', 'SSE', 'Icecast'],
      spineColor: '#02203fff',
      spineTextColor: '#ECF0F1',
      demoUrl: 'https://www.lancerosfm.com',
      repoUrl: 'https://github.com/juanitomanoplateada/lancerosfm',
      galleryImages: [
        'https://raw.githubusercontent.com/juanitomanoplateada/lancerosfm/master/public/img/previews/desktop.png',
        'https://raw.githubusercontent.com/juanitomanoplateada/lancerosfm/master/public/img/previews/mobile.png',
        'https://raw.githubusercontent.com/juanitomanoplateada/lancerosfm/master/public/img/brand/banner.png',
        'https://raw.githubusercontent.com/juanitomanoplateada/lancerosfm/master/public/img/logo-512.webp'
      ]
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
    },
    {
      id: '4',
      title: 'ytaPDF',
      subtitle: 'Editor PDF Web Avanzado',
      description: 'Editor de PDF web de alto rendimiento para proporcionar una experiencia fluida. Permite visualizar, organizar, modificar y exportar documentos PDF con máxima precisión directamente desde el navegador.',
      technologies: ['Svelte 5', 'TypeScript', 'Fabric.js v7', 'PDF.js', 'pdf-lib'],
      spineColor: '#FF3E00',
      spineTextColor: '#FFFFFF',
      demoUrl: 'https://ytapdf.vercel.app/',
      repoUrl: 'https://github.com/juanitomanoplateada/ytaPDF',
      galleryImages: [
        'ytapdf/0.png',
        'ytapdf/1.png',
        'ytapdf/2.png',
        'ytapdf/3.png'
      ]
    }
  ];
}
