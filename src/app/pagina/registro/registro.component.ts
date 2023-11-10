import { Component } from '@angular/core';
import {RegistroPacienteDTO} from "../../modelo/registro-paciente-dto";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public registroPacienteDTO: RegistroPacienteDTO;
  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
  }

  public registrar(){
    console.log(this.registroPacienteDTO);
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }
}
