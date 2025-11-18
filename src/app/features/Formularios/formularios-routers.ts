import { Routes } from '@angular/router';

import { Formularios } from './pages/Formulario/Formularios';
import { FormulariosDinamicos } from './pages/FormulariosDinamicos/FormulariosDinamicos/FormulariosDinamicos';
import { FormulariosMore } from './pages/FormulariosMore/formularios-more/formularios-more';


export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: Formularios },
      { path: 'dynamic', component: FormulariosDinamicos },
      { path: 'more', component: FormulariosMore },

      { path: '**', redirectTo: 'basic' }
    ]
  }
];
