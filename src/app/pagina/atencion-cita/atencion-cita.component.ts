import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atencion-cita',
  templateUrl: './atencion-cita.component.html',
  styleUrls: ['./atencion-cita.component.css']
})
export class AtencionCitaComponent {

  constructor(private router: Router) {}

  guardar(){
    this.router.navigate(['/gestionar-citas']);
  }

  consultarHistoriaClinica(){
    this.router.navigate(['/historia-clinica-paciente']);
  }
}
