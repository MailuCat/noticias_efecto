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
     let t:string="soy veganismo";
     this.title.setTitle(t)
     this.seo.generateTags({
      title: "nombre veganos",
      description: "descripcion vegetales",
      slug:"veganismo/component"
     })
 

}

}
