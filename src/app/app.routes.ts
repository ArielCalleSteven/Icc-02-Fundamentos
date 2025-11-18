import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { Perfil } from './features/PerfilPage/Perfil';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'perfil',
        component: Perfil
    },
    {
        path: 'proyectos-dos-page',
        component: ProyectosDosPage
    },
    {
        path: 'proyectos-page',
        component: ProyectosPage
    },
    {
        path: 'formularios',
        loadChildren: () =>
          import('./features/Formularios/formularios-routers').then((m) => m.formulariosRoutes),    },
];