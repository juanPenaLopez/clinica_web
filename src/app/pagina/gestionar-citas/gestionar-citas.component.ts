import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalEliminarCitaComponent } from './modal-eliminar-cita/modal-eliminar-cita.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {

  constructor(private router: Router,
    private dialog: MatDialog
    ) {}

  verDetalles() {
    this.router.navigate(['/gestionar-citas/consultar-detalle-cita']);
  }

  eliminarCita() {
    this.dialog.open(ModalEliminarCitaComponent);
  }

}
