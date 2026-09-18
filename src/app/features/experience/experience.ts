import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
    id: string;
    year: string;
    title: string;
    company: string;
    description: string;
    icon?: string;
    side: 'left' | 'right';
}

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.scss'
})
export class Experience {
    experienceList: ExperienceItem[] = [
        {
            id: 'current',
            year: 'Ene 2026 - Actualidad',
            title: 'Desarrollador Full-Stack',
            company: 'DTIC (UPTC)',
            description: 'Servicios REST en Java y Spring Boot e interfaces en Angular para los sistemas de información institucionales. Modelado SQL, integración entre plataformas y calidad de código con SonarQube.',
            side: 'left'
        },
        {
            id: 'incitema',
            year: 'Mar 2026 - Sep 2026',
            title: 'Practicante',
            company: 'INCITEMA (UPTC)',
            description: 'Llevé GELI, el sistema de gestión de equipos de laboratorio, de prototipo académico a solución entregada: 71 endpoints en Spring Boot, 51 vistas en Angular, esquema Oracle institucional y autenticación con el Keycloak de la UPTC.',
            side: 'right'
        },
        {
            id: 'lanceros',
            year: 'Ene 2025 - Dic 2025',
            title: 'Desarrollador Full Stack',
            company: 'Lanceros Stereo 94.1 FM',
            description: 'Llevé una emisora comunitaria de FM a internet: cadena de transmisión con BUTT, Icecast y Zeno Media, API en Flask que sincroniza la canción al aire y portal en Angular. Sigue en operación.',
            side: 'left'
        }
    ];
}
