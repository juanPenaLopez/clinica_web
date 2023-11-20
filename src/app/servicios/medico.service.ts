import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MensajeDTO } from "../modelo/mensaje-dto";
import { Observable } from "rxjs";
import { SolicitarDiaLibreInDTO } from "../modelo/solicitar-dia-libre-in.dto";
import { solicitarReservaQuirofanoDTO } from "../modelo/solicitar-reserva-quirofano.dto";
import { AtencionCitaDTO } from "../modelo/atencion-cita.dto";

@Injectable({
    providedIn: 'root'
})
export class MedicoService {

    private userUrl = "http://localhost:8080/api/medicos";
    constructor(private http: HttpClient) { }

    public solicitarDiaLibre(inDTO : SolicitarDiaLibreInDTO): Observable<MensajeDTO>{
        return this.http.put<MensajeDTO>(`${this.userUrl}/solicitar-dia-libre`, inDTO);
    }

    public consultarCitasPendientes(idEstadoCita : number, idMedico : number): Observable<MensajeDTO>{
        return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${idEstadoCita}, ${idMedico}`);
    }

    public consultarHistorialCitasAtendidas(idMedico : number): Observable<MensajeDTO>{
        return this.http.post<MensajeDTO>(`${this.userUrl}/historico-citas`, idMedico);
    }

    public consultarHistorialPaciente(idPaciente : number): Observable<MensajeDTO>{
        return this.http.post<MensajeDTO>(`${this.userUrl}/historial-paciente`, idPaciente);
    }

    public realizarDiagnosticoPaciente(inDTO : AtencionCitaDTO): Observable<MensajeDTO>{
        return this.http.post<MensajeDTO>(`${this.userUrl}/diagnostico-paciente`, inDTO);
    }

    public solicitarReservaQuirofano(inDTO : solicitarReservaQuirofanoDTO): Observable<MensajeDTO>{
        return this.http.put<MensajeDTO>(`${this.userUrl}/reserva-quirofano`, inDTO);
    }
}