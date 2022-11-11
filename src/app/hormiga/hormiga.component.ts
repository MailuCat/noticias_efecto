import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service'

@Component({
  selector: 'app-hormiga',
  templateUrl: './hormiga.component.html',
  styleUrls: ['./hormiga.component.scss']
})

export class HormigaComponent implements OnInit {
 
  
  constructor(private title : Title, private seo:SeoService) { } 

  ngOnInit(): void {
    let t:string="Censo a las hormigas";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Censo a las hormigas:",
      description:"La población total es de 20000 billones",
      slug:"/hormiga-component",
      image:"https://efectomariposa.org/cpg/albums/userpics/10001/1/normal_censo_hormigas.jpg"
     })
  }

}
