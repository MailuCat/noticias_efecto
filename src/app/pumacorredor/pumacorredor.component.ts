import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';


@Component({
  selector: 'app-pumacorredor',
  templateUrl: './pumacorredor.component.html',
  styleUrls: ['./pumacorredor.component.scss']
})


export class PumacorredorComponent implements OnInit {
 

  constructor(private title : Title, private seo:SeoService) { } 
		
	
  ngOnInit(): void {
    let t:string="Identifican corredores biológicos de pumas en la RM";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Identifican corredores biológicos de pumas en la RM",
      description:"Estas rutas deberían ser protegidas para conservar la especie",
      slug:"pumacorredor-component",
      image:"https://gefmontana.mma.gob.cl/wp-content/uploads/2021/12/Imagen1.png"
     })
    }
}
