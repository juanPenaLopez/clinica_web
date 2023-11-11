import { Component } from '@angular/core';
import {RegistroPQRSDTO} from "../../modelo/registro-pqrs.dto";
import {PqrsService} from "../../servicios/pqrs.service";

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {

  registroPQRSDTO: RegistroPQRSDTO;
  constructor(private pqrsService: PqrsService) {
    this.registroPQRSDTO = new RegistroPQRSDTO();
  }
  public crearPqrs(){
    this.pqrsService.crear(this.registroPQRSDTO);
  }
  public seleccionar(codigoCita:number){
    this.registroPQRSDTO.codigoCita = codigoCita;
  }
}
