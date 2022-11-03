import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';

import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-pumacorredor',
  templateUrl: './pumacorredor.component.html',
  styleUrls: ['./pumacorredor.component.scss']
})


export class PumacorredorComponent implements OnInit {
 

  constructor(private title : Title, private seo:SeoService) { } 
		
	
  ngOnInit(): void {
    let t:string="Investigacion pumas";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Establecen corredores biológicos",
      description:"",
      slug:"/pumas-component"
     })
    }
}
