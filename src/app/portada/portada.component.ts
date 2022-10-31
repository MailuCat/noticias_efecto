import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../types';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  
  noticiasdeldia:Proyectos[];
  noticiassecundarias:Proyectos[]

  constructor() {

    this.noticiasdeldia = [{
      titulo: "Más de 200 plantas endémicas serán protegidas en el futuro Parque Nacional Desierto Florido",
      imagen: "./assets/desierto_florido.jpg",
      texto: "El presidente Gabriel Boric hizo el anuncio de la creación de esta nueva reserva ubicada a 30 km a sur de Copiapó",
      enlace: "/desierto-component",
    },
    {
    titulo: "Seguimiento a dos pumas evidencia la necesidad de fortalecer los corredores biológicos para la conservación de la fauna",
          imagen: "https://gefmontana.mma.gob.cl/wp-content/uploads/2021/12/Imagen1.png",
          texto: "El monitoreo lo realizaron especialistas del proyecto GEF Corredores Biológicos de Montaña usando collares satelitales en dos felinos en la Región Metropolitana",
          enlace: "/pumacorredor-component",
        },
    ];
    
        this.noticiassecundarias=[{
      titulo: "Impactante hallazgo de cadáveres de perros arrojados en bolsas de basura en el cerro Polanco de Valparaíso",
      imagen: "http://img.soy-chile.cl/Fotos/2016/01/13/file_20160113205322.jpg",
      texto: "Los vecinos se encuentran consternados frente a la presencia de los restos de canes faenados. Los antecedentes fueron entregados a la Bidema para su investigación",
      enlace: "/perros-component",
    },
    {
      titulo: "Científicos censaron cuantas hormigas viven en el planeta",
      imagen: "http://1.bp.blogspot.com/-8MeqXZF5giM/Ta3Q9VzqKcI/AAAAAAAAAq8/oB6oG3uPIGk/s1600/hormigas_www.plantamer.blogspot.com.jpg",
      texto: "Los científicos concluyeron que en todo el planeta viven alrededor de 20 mil millones de millones de hormigas (20.000.000.000.000.000).",
      enlace: "/hormiga-component",
    },
    {
      titulo: "Explora RM Sur Oriente celebra el Festival de las Ciencias junto a la comunidad",
      imagen: "https://www.rockandpop.cl/wp-content/uploads/2020/11/9eb1b587de85e129ba84b05edf9a71c2-768x518.jpg",
      texto: "El Festival de las Ciencias 2022 se realizará entre el 2 y 9 de octubre y contará con diversas actividades a lo largo de todo el país. Como “La Fiesta Ciudadana por el Agua” y la muestra gráfica “Ciencia a un metro”, en siete estaciones del tren subterráneo de Santiago",
      enlace: "",
    },
       ]
    


   }

  ngOnInit(): void {
  }

}
