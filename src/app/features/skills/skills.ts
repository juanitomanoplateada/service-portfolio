import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

interface Skill {
  name: string;
  iconUrl: string;
  level?: 'expert' | 'intermediate' | 'basic';
  group?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  animations: [
    trigger('slideInOut', [
      transition(':increment', [
        style({ position: 'relative' }),
        group([
          query('.category-panel:leave', [
            style({ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1 }),
            animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true }),
          query('.category-panel:enter', [
            style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(100%)', opacity: 0, zIndex: 2 }),
            animate('500ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
          ], { optional: true })
        ])
      ]),
      transition(':decrement', [
        style({ position: 'relative' }),
        group([
          query('.category-panel:leave', [
            style({ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1 }),
            animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
          ], { optional: true }),
          query('.category-panel:enter', [
            style({ position: 'absolute', top: 0, left: 0, width: '100%', transform: 'translateX(-100%)', opacity: 0, zIndex: 2 }),
            animate('500ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class Skills {
  categories: SkillCategory[] = [
    {
      name: 'Backend',
      skills: [
        { name: 'Java', iconUrl: 'https://img.icons8.com/ios_filled/512/FFFFFF/java-coffee-cup-logo.png', level: 'expert', group: 'java-spring' },
        { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot/white', level: 'expert', group: 'java-spring' },

        { name: 'Python', iconUrl: 'https://img.icons8.com/ios_filled/512/FFFFFF/python.png', level: 'intermediate' },
        { name: 'C++', iconUrl: 'https://cdn.simpleicons.org/cplusplus/white', level: 'intermediate' }
      ]
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', iconUrl: 'https://img.icons8.com/ios_filled/512/FFFFFF/angularjs.png', group: 'frontend-core' },
        { name: 'TypeScript', iconUrl: 'https://img.icons8.com/ios_filled/512/FFFFFF/typescript.png', group: 'frontend-core' },
        { name: 'HTML', iconUrl: 'https://img.icons8.com/ios_filled/512/FFFFFF/html-5.png', group: 'frontend-core' },
        { name: 'SCSS', iconUrl: 'https://sass-lang.com/assets/img/styleguide/white.png', group: 'frontend-core' }
      ]
    },
    {
      name: 'Bases de Datos',
      skills: [
        { name: 'Oracle', iconUrl: 'https://m.media-amazon.com/images/I/41QodfboFdL.png', level: 'expert' },
        { name: 'MongoDB', iconUrl: 'https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1720244492', level: 'expert' }
      ]
    },
    {
      name: 'Herramientas',
      skills: [
        { name: 'Docker', iconUrl: 'https://cdn-icons-png.flaticon.com/512/5969/5969124.png', level: 'expert' },
        { name: 'Git', iconUrl: 'https://cdn.simpleicons.org/git/white', level: 'expert' },
        { name: 'Keycloak', iconUrl: 'https://cdn.simpleicons.org/keycloak/white', level: 'expert' }
      ]
    },
    {
      name: 'Idiomas',
      skills: [
        { name: 'Español (Nativo)', iconUrl: 'https://cdn-icons-png.flaticon.com/512/6724/6724649.png', level: 'expert' },
        { name: 'Inglés (B1)', iconUrl: 'https://cdn-icons-png.flaticon.com/512/984/984204.png', level: 'expert' }
      ]
    }
  ];

  selectedCategoryIndex = 0;

  get selectedCategory(): SkillCategory {
    return this.categories[this.selectedCategoryIndex];
  }

  get hasNext(): boolean {
    return this.selectedCategoryIndex < this.categories.length - 1;
  }

  get hasPrev(): boolean {
    return this.selectedCategoryIndex > 0;
  }

  nextCategory(): void {
    if (this.hasNext) {
      this.selectedCategoryIndex++;
    }
  }

  prevCategory(): void {
    if (this.hasPrev) {
      this.selectedCategoryIndex--;
    }
  }

  getSkillClass(skillName: string): string {
    const safeName = skillName.toLowerCase()
      .replace(/\+/g, 'plus')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `gear-${safeName}`;
  }
}
