import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-plastico',
  templateUrl: './plastico.component.html',
  styleUrls: ['./plastico.component.scss']
})
export class PlasticoComponent implements OnInit {
  
  
  constructor(private title : Title, private seo:SeoService) { } 

  ngOnInit(): void {
    let t:string="Acidificación del mar";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Acidificación del mar",
      description:"Degradación del plástico por el sol ocasiona este fenómeno",
      slug:"/plastico-component",
      image:"https://p1.pxfuel.com/preview/396/350/384/plastic-fish-recycling-trash-contamination-dead.jpg",
     })
  }


}
