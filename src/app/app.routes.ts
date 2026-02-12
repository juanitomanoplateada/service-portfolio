import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', component: Home, data: { animation: 'Home' } },
            { path: 'experience', component: Experience, data: { animation: 'Experience' } },
            { path: 'projects', component: Projects, data: { animation: 'Projects' } },
            { path: 'skills', component: Skills, data: { animation: 'Skills' } },
            { path: 'contact', component: Contact, data: { animation: 'Contact' } },
        ]
    },
    { path: '**', redirectTo: '' }
];
