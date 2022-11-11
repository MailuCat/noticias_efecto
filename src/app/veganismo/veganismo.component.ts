import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';


@Component({
  selector: 'app-veganismo',
  templateUrl: './veganismo.component.html',
  styleUrls: ['./veganismo.component.scss']
})
export class VeganismoComponent implements OnInit {

  constructor(private title : Title, private seo:SeoService) { }

  ngOnInit() {
     let t:string="Crece mercado vegano";
     this.title.setTitle(t)
     this.seo.generateTags({
      title: "Crece mercado vegano",
      description: "Estudio Ipsos revela aumento de consumo de alimentos basados en plantas",
      slug:"/veganismo-component",
      image:"https://3.bp.blogspot.com/-KU8mOoCIBXc/UaMJYBzKZbI/AAAAAAAADg4/qp0i5E9ZR2M/s640/pastel-guisantes-vegano.JPG"
     })
 

}

}
