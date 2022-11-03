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
    let t:string="Censo de hormigas";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Censo hormigas",
      description:"20000 billones de hormigas",
      slug:"/hormiga-component"
     })
  }

}
