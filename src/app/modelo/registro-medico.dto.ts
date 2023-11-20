import { HorarioDTO } from "./horario.dto";

export class RegistroMedicoDTO{

    nombre : string = "";
    cedula : string = "";
    idCiudad : number = 0;
    idEspecialidad : number = 0;
    telefono : string = "";
    correo : string = "";
    password : string = "";
    urlFoto : string = "";
    horarios : Array<HorarioDTO> = new Array;
    idTipoIdentificacion : number = 0;
}