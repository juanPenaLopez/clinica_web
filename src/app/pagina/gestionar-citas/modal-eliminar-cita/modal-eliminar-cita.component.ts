import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-eliminar-cita',
  templateUrl: './modal-eliminar-cita.component.html',
  styleUrls: ['./modal-eliminar-cita.component.css']
})
export class ModalEliminarCitaComponent {

  constructor(private dialogRef: MatDialogRef<ModalEliminarCitaComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(false);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
