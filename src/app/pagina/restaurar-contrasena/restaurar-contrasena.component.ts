import { Component } from '@angular/core';
import {AuthService} from "../../servicios/auth.service";
import {ClinicaService} from "../../servicios/clinica.service";
import {TokenService} from "../../servicios/token.service";
import {Router} from "@angular/router";
import {LoginDTO} from "../../modelo/login-dto";

@Component({
  selector: 'app-restaurar-contrasena',
  templateUrl: './restaurar-contrasena.component.html',
  styleUrls: ['./restaurar-contrasena.component.css']
})
export class RestaurarContrasenaComponent {

  constructor(private router: Router) {}

  public siguiente(){
    this.router.navigate(['/recuperar-cuenta']);
  }

}
