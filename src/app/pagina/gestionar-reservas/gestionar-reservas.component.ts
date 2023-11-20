import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionar-reservas',
  templateUrl: './gestionar-reservas.component.html',
  styleUrls: ['./gestionar-reservas.component.css']
})
export class GestionarReservasComponent {

  verDetalles() {
    // Lógica para mostrar detalles de la reserva
    console.log('Ver detalles');
  }

  eliminarReserva() {
    // Lógica para eliminar la reserva
    console.log('Eliminar reserva');
  }

}
