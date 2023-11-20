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
import { RecuperacionCuentaComponent } from './pagina/recuperacion-cuenta/recuperacion-cuenta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContentComponent } from './pagina/modal-content/modal-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SolicitarDiaLibreComponent } from './pagina/solicitar-dia-libre/solicitar-dia-libre.component';
import { GestionarReservasComponent } from './pagina/gestionar-reservas/gestionar-reservas.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GestionarCitasComponent } from './pagina/gestionar-citas/gestionar-citas.component';

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
    RestaurarContrasenaComponent,
    RecuperacionCuentaComponent,
    ModalContentComponent,
    SolicitarDiaLibreComponent,
    GestionarReservasComponent,
    GestionarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
