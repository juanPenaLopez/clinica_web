import { Component } from '@angular/core';
import {PqrsService} from "../../servicios/pqrs.service";
import {ItemPQRSDTO} from "../../modelo/item-pqrs.dto";

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: ItemPQRSDTO[];
  constructor( private pqrsService: PqrsService ) {
    this.pqrs = pqrsService.listar();
  }

}
