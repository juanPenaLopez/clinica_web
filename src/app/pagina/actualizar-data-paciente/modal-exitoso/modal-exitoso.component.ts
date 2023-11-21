import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-exitoso',
  templateUrl: './modal-exitoso.component.html',
  styleUrls: ['./modal-exitoso.component.css']
})
export class ModalExitosoComponent {

  constructor(private dialogRef: MatDialogRef<ModalExitosoComponent>,
    private router: Router) {}

  cerrarModal() {
    // Cierra el modal
    this.dialogRef.close();

    // Redirige al componente de home
    this.router.navigate(['/home']);
  }
}
