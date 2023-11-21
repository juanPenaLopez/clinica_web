import { Component } from '@angular/core';
import {RegistroPacienteDTO} from "../../modelo/registro-paciente-dto";
import {ClinicaService} from "../../servicios/clinica.service";
import {AuthService} from "../../servicios/auth.service";
import {Alerta} from "../../modelo/alerta";
import {ImagenService} from "../../servicios/imagen.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public registroPacienteDTO: RegistroPacienteDTO;
  public ciudades: Array<any>;
  alerta!:Alerta;
  public archivos: any;
  private usuario: RegistroPacienteDTO;

  constructor(private authService: AuthService, private clinicaService: ClinicaService,
              private imagenService: ImagenService,
              private router: Router) {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = new Array<any>();
    this.usuario = new RegistroPacienteDTO();
  }

  public registrar() {

    this.router.navigate(['/completar-registro']);

    if (this.registroPacienteDTO.urlFoto.length != 0){
      this.authService.registrarPaciente(this.usuario).subscribe({
        next: (data: { respuesta: any; }) => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: (error: { error: { respuesta: any; }; }) => {
          this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });
    }else{
      this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
    }
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.registroPacienteDTO.urlFoto = event.target.files[0].name;
      this.archivos = event.target.files;
    }
  }

  private cargarCiudades() {
    this.clinicaService.listarCiudades().subscribe({
      next: data => {
        this.ciudades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroPacienteDTO.urlFoto = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }
  
}
