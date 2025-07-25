import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BebidasService } from './bebidas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bebidas';
   bebidas: any[] = [];
  cargando: boolean = false;

  constructor(private bebidasService: BebidasService) {}

  async cargarBebidas(): Promise<void> {
  this.cargando = true;

  try {
    const data = await this.bebidasService.getBebidas();

    // Simular un retraso aprox segundos antes de mostrar los datos
    await new Promise(resolve => setTimeout(resolve, 6000));

    this.bebidas = data?.drinks ?? [];
  } catch (error) {
    alert("Error al cargar bebidas: " + error);
  } finally {
    this.cargando = false;
  }
}
}

