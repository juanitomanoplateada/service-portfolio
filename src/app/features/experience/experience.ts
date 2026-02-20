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
            year: '2026 - Actualidad',
            title: 'Full Stack Developer ',
            company: 'DTIC (UPTC)',
            description: 'Desarrollo y mantenimiento de sistemas de información institucionales. Especialización en Angular, Spring Boot y tecnologías relacionadas.',
            side: 'left'
        },
        {
            id: 'incitema',
            year: '2025 - Actualidad',
            title: 'Practicante',
            company: 'INCITEMA (UPTC)',
            description: 'Arquitectura y desarrollo integral de GELI, sistema institucional de gestión de equipos de laboratorio. Desarrollo Backend en Spring Boot y Frontend en Angular, integración con el IAM institucional (Keycloak) y persistencia en Oracle.',
            side: 'right'
        }
    ];
}
