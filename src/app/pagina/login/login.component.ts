import { Component } from '@angular/core';
import {Alerta} from "../../modelo/alerta";
import {LoginDTO} from "../../modelo/login-dto";
import {AuthService} from "../../servicios/auth.service";
import {ClinicaService} from "../../servicios/clinica.service";
import {TokenService} from "../../servicios/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public alerta!:Alerta;
  public loginDTO : LoginDTO;

  constructor(private authService: AuthService, private clinicaService: ClinicaService,
              private tokenService: TokenService) {
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
}
