import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import {UsuarioInterceptor} from "./interceptor/usuario.interceptor";
import { AtencionCitaComponent } from './pagina/atencion-cita/atencion-cita.component';
import { CrearMedicoComponent } from './pagina/crear-medico/crear-medico.component';
import { RestaurarContrasenaComponent } from './pagina/restaurar-contrasena/restaurar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    AlertaComponent,
    AtencionCitaComponent,
    CrearMedicoComponent,
    RestaurarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
