import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-recuperacion-cuenta',
  templateUrl: './recuperacion-cuenta.component.html',
  styleUrls: ['./recuperacion-cuenta.component.css']
})
export class RecuperacionCuentaComponent {

  constructor(public dialog: MatDialog){}

  public continuar() {
    this.dialog.open(ModalContentComponent);
  }

}

document.addEventListener("DOMContentLoaded", function () {
  // Simula la carga de correos electrónicos desde el back-end
  const correosElectronicos = ["correo1@example.com", "correo2@example.com", "correo3@example.com"];

  const checkboxContainer = document.getElementById("checkboxContainer");

  if(checkboxContainer){
    // Agrega checkboxes dinámicamente
  correosElectronicos.forEach((correo) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "correo";
    checkbox.value = correo;

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(correo));

    checkboxContainer.appendChild(label);
  });
  }
});
