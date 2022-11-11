import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-gases',
  templateUrl: './gases.component.html',
  styleUrls: ['./gases.component.scss']
})

export class GasesComponent implements OnInit {
 

  constructor(private title : Title, private seo:SeoService) { }

  ngOnInit(): void {
    // add new tag
    let t:string="Primer estudio de emisión de gases domiciliarios"
   this.title.setTitle(t)
   this.seo.generateTags({
    title:"Primer estudio de emisión de gases domiciliarios",
    description:"Es el primer mapa de la calidad del aire en todo el territorio de Chile",
    slug:"/gases-component",
    image:"https://efectomariposa.org/cpg/albums/userpics/10001/1/normal_gases_domiciiarios.jpg"
   })
  }
}  

