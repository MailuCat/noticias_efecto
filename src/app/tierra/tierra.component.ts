import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../types';

@Component({
  selector: 'app-tierra',
  templateUrl: './tierra.component.html',
  styleUrls: ['./tierra.component.scss']
})
export class TierraComponent implements OnInit {

  noticiastierra:Proyectos[];

  constructor() {

    this.noticiastierra = [{
      titulo: "Seguimiento a dos pumas evidencia la necesidad de fortalecer los corredores biológicos para la conservación de la fauna",
      imagen: "https://gefmontana.mma.gob.cl/wp-content/uploads/2021/12/Imagen1.png",
      texto: "",
      enlace: "/pumacorredor-component",
    },
    {
      titulo: "Más de 200 plantas endémicas serán protegidas en el futuro Parque Nacional Desierto Florido",
  imagen: "./assets/desierto_florido.jpg",
  texto: "",
  enlace: "/desierto-component",
    }
  ]
   }

  ngOnInit(): void {
  }

}
