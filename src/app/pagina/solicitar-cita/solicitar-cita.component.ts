import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent {

  especialidad: string = "";
  medicoTratante: string = "";

  consultarDisponibilidad() {
    // Lógica para consultar disponibilidad
    console.log('Consultando disponibilidad...');
  }
}
