import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import {GestionPqrsComponent} from "./pagina/gestion-pqrs/gestion-pqrs.component";
import {CrearPqrsComponent} from "./pagina/crear-pqrs/crear-pqrs.component";
import {DetallePqrsComponent} from "./pagina/detalle-pqrs/detalle-pqrs.component";
import {LoginGuard} from "./guards/permiso.service";
import {AtencionCitaComponent} from "./pagina/atencion-cita/atencion-cita.component";
import {CrearMedicoComponent} from "./pagina/crear-medico/crear-medico.component";
import {RolesGuard} from "./guards/roles.service";
import { RestaurarContrasenaComponent } from './pagina/restaurar-contrasena/restaurar-contrasena.component';
import {RecuperacionCuentaComponent} from "./pagina/recuperacion-cuenta/recuperacion-cuenta.component";
import {SolicitarDiaLibreComponent} from "./pagina/solicitar-dia-libre/solicitar-dia-libre.component";
const routes: Routes = [
{ path: "home", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
  { path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"] } },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "crear-pqrs", component: CrearPqrsComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["paciente"] } },
  { path: "detalle-pqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard],
    data: { expectedRole: ["paciente", "admin"] } },
  { path: "atender-cita", component: AtencionCitaComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["medico"] } },
  { path: "crear-medico", component: CrearMedicoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["admin"] } },
{ path: "restaurar-contrasena", component: RestaurarContrasenaComponent },
  { path: "recuperar-cuenta", component: RecuperacionCuentaComponent },
  { path: "solicitar-dia-libre", component: SolicitarDiaLibreComponent },
{ path: "**", pathMatch: "full", redirectTo: "home" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
