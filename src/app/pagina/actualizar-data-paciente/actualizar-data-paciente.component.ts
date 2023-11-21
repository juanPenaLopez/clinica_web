import { Component } from '@angular/core';
import { ModalExitosoComponent } from './modal-exitoso/modal-exitoso.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actualizar-data-paciente',
  templateUrl: './actualizar-data-paciente.component.html',
  styleUrls: ['./actualizar-data-paciente.component.css']
})
export class ActualizarDataPacienteComponent {

  constructor(public dialog: MatDialog) {}

  actualizar(){
    this.dialog.open(ModalExitosoComponent);
  }
}
