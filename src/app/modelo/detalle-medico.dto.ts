import { HorarioDTO } from "./horario.dto";

export class DetalleMedicoDTO{
    idMedico : number = 0;
    correco : string = "";
    contrasena : string = "";
    telefono : string = "";
    urlFoto : string = "";
    horarios : Array<HorarioDTO> = new Array;
    numeroIdentificacion : string = "";
    nombrecompleto : string = "";
    idEspecialidad : number = 0;
    idCiudad : number = 0;
}