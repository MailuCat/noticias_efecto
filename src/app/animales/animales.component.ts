import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../types';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

  noticiasanimales:Proyectos[];

  constructor() {

    this.noticiasanimales = [
      {
        titulo: "Seguimiento a dos pumas evidencia la necesidad de fortalecer los corredores biológicos para la conservación de la fauna",
      imagen: "https://gefmontana.mma.gob.cl/wp-content/uploads/2021/12/Imagen1.png",
      texto: "El monitoreo lo realizaron especialistas del proyecto GEF Corredores Biológicos de Montaña usando collares satelitales en dos felinos en la Región Metropolitana",
      enlace: "",
    },
      {  titulo: "Impactante hallazgo de cadáveres de perros arrojados en bolsas de basura en el cerro Polanco de Valparaíso",
      imagen: "http://img.soy-chile.cl/Fotos/2016/01/13/file_20160113205322.jpg",
      texto: "Los vecinos se encuentran consternados frente a la presencia de los restos de canes faenados. Los antecedentes fueron entregados a la Bidema para su investigación",
      enlace: "",
    },
      {
      titulo: "Científicos censaron cuantas hormigas viven en el planeta",
      imagen: "http://1.bp.blogspot.com/-8MeqXZF5giM/Ta3Q9VzqKcI/AAAAAAAAAq8/oB6oG3uPIGk/s1600/hormigas_www.plantamer.blogspot.com.jpg",
      texto: "Los científicos concluyeron que en todo el planeta viven alrededor de 20 mil millones de millones de hormigas (20.000.000.000.000.000)",
      enlace: "",
    },
    {
      titulo: "Estudio revela gran interés en Chile por alimentos veganos",
      imagen: "https://3.bp.blogspot.com/-KU8mOoCIBXc/UaMJYBzKZbI/AAAAAAAADg4/qp0i5E9ZR2M/s640/pastel-guisantes-vegano.JPG",
      texto: "Este y otros temas del mundo vegano serán analizados en profundidad durante el Congreso Chile Plant Based, evento que busca reunir a la industria en torno a la evolución gastronómica en esta área y a cómo el sector tradicional puede relacionarse e integrar estas opciones alimentarias",
      enlace: "",
      },
    ]
   }

  ngOnInit(): void {
  }

}
