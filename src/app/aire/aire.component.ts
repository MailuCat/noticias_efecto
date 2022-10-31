import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../types';


@Component({
  selector: 'app-aire',
  templateUrl: './aire.component.html',
  styleUrls: ['./aire.component.scss']
})
export class AireComponent implements OnInit {

  noticiasaire:Proyectos[];
  
  constructor() {
    this.noticiasaire = [{
      titulo: "Chile, uno de los países americanos con más aporte al cambio climático en lo que se refiere al porcentaje de su población",
      imagen: "https://tse1.mm.bing.net/th?id=OIP.PJPntdXJMLIbL1krubUK1gHaEE&pid=Api&P=0",
     texto: "La producción estimada al año llega a cerca de las 5 toneladas de CO2 per cápita al año, según concluye el primer estudio sistemático de la contaminación en este país",
      enlace: "/gases-component",
  
    }]

   }

  ngOnInit(): void {
  }

}
