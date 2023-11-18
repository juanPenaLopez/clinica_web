import { Component } from '@angular/core';
import {Alerta} from "../../modelo/alerta";
import {LoginDTO} from "../../modelo/login-dto";
import {AuthService} from "../../servicios/auth.service";
import {ClinicaService} from "../../servicios/clinica.service";
import {TokenService} from "../../servicios/token.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public alerta!:Alerta;
  public loginDTO : LoginDTO;

  constructor(private authService: AuthService, private clinicaService: ClinicaService,
              private tokenService: TokenService, private router: Router) {
    this.loginDTO = new LoginDTO();
  }

  public login(){
    this.authService.login(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  public recuperarContrasena(){
    this.router.navigate(['/restaurar-contrasena']);
  }
}
