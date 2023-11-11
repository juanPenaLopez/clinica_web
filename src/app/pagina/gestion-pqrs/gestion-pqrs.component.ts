import { Component } from '@angular/core';
import {PqrsService} from "../../servicios/pqrs.service";
import {ItemPQRSDTO} from "../../modelo/item-pqrs.dto";
import {PacienteService} from "../../servicios/paciente.service";
import {TokenService} from "../../servicios/token.service";

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: ItemPQRSDTO[];
  constructor(private pacienteService: PacienteService, private tokenService: TokenService) {
    this.pqrs = [];
    this.obtenerPqrs();
  }

  public obtenerPqrs() {
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.listarPQRSPaciente(codigo).subscribe({
      next: data => {
        this.pqrs = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
