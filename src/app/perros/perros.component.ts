import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})


export class PerrosComponent implements OnInit {
 
  constructor(private title : Title, private seo:SeoService) { } 

  ngOnInit(): void {
    let t:string="Impacta hallazgo de perros faenados";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Impacta hallazgo de perros faenados",
      description:"Cerro Polanco de Valparaíso fue el lugar de los hechos",
      slug:"/perros-component",
      image:"http://img.soy-chile.cl/Fotos/2016/01/13/file_20160113205322.jpg"
     })
  }


}
