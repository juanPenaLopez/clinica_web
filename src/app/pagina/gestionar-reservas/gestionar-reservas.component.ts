import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionar-reservas',
  templateUrl: './gestionar-reservas.component.html',
  styleUrls: ['./gestionar-reservas.component.css']
})
export class GestionarReservasComponent {

  verDetalles() {
    console.log('Ver detalles');
  }

  eliminarReserva() {
    console.log('Eliminar reserva');
  }

}
