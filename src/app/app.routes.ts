import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { Perfil } from './features/PerfilPage/Perfil';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';
import { Formularios } from './features/Formularios/Formularios';

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
    component: Formularios
  }
];
