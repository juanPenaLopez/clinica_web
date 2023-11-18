import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  constructor(private dialogRef: MatDialogRef<ModalContentComponent>,
    private router: Router){}

  cerrarModal() {
    // Cierra el modal
    this.dialogRef.close();

    // Redirige al componente de home
    this.router.navigate(['/home']);
  }

}
