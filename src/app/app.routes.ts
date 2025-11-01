import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { Perfil } from './features/PerfilPage/Perfil';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'perfil',
    component: Perfil
  }
];
