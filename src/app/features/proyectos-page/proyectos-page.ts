import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  name = signal<string>('');
  descripcion = signal<string>('');
  
  proyectos = signal<Proyecto[]>([
    { id: 1, nombre: 'Proyecto A', descripcion: 'Descripción' }
  ]);

  changeName(value: string) { this.name.set(value); }
  changeDescription(value: string) { this.descripcion.set(value); }

  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      nombre: this.name(),
      descripcion: this.descripcion()
    };
    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.descripcion.set('');
  }
}
