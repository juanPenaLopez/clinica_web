import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {

  verDetalles() {
    // Lógica para mostrar detalles de la cita
    console.log('Ver detalles de la cita');
  }

  eliminarCita() {
    // Lógica para eliminar la cita
    console.log('Eliminar cita');
  }

}
