import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../types';


@Component({
  selector: 'app-mar',
  templateUrl: './mar.component.html',
  styleUrls: ['./mar.component.scss']
})
export class MarComponent implements OnInit {

  noticiasmar:Proyectos []

  constructor() {

    this.noticiasmar =[{
      titulo: "La degradación del plástico por el efecto de la luz solar en el océano contribuye a la acidificación de los mares, según ha revelado un estudio liderado por el Instituto de Ciencias del Mar (ICM-CSIC) de Barcelona.",
      imagen: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2017/04/27175/image1170x530cropped.jpg",
      texto: "",
      enlace: "/plastico-component",
    },
  ]

   }

  ngOnInit(): void {
  }

}
