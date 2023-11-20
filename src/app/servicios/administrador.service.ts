import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistroMedicoDTO } from "../modelo/registro-medico.dto";
import { MensajeDTO } from "../modelo/mensaje-dto";
import { Observable } from "rxjs";
import { DetalleMedicoDTO } from "../modelo/detalle-medico.dto";
import { RegistroRespuestaDTO } from "../modelo/registro-respuesta.dto";

@Injectable({
    providedIn: 'root'
  })
export class AdministradorService{

    private userUrl = "http://localhost:8080/api/administradores";
    constructor(private http: HttpClient) { }

    public crearMedico(inDTO : RegistroMedicoDTO): Observable<MensajeDTO>{
        return this.http.post<MensajeDTO>(`${this.userUrl}/crear-medico`, inDTO);
    }

    public actualizarMedico(inDTO: DetalleMedicoDTO): Observable<MensajeDTO>{
        return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-medico`, inDTO);
    }

    public eliminarMedico(idMedico : number): Observable<MensajeDTO>{
        return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-medico/${idMedico}`);
    }

    public listarMedicos(): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/listar-medicos`);
    }

    public obtenerMedico(idMedico : number): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/detalle-medico/${idMedico}`);
    }

    public listarPQRS(): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/pqrs`);
    }

    public verDetallePQRS(idPqrs : number): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/detalle-pqrs/${idPqrs}`);
    }

    public responderPQRS(inDTO : RegistroRespuestaDTO): Observable<MensajeDTO>{
        return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-estado-pqrs`, inDTO);
    }

    public cambiarEstadoPQRS(codigoPqrs : number, idEstado : number): Observable<MensajeDTO>{
        return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-estado-pqrs`, new Array(codigoPqrs, idEstado));
    }

    public listarCitas(): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/citas`);
    }
}