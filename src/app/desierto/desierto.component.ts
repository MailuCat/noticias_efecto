import { BrowserModule, Meta, } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-desierto',
  templateUrl: './desierto.component.html',
  styleUrls: ['./desierto.component.scss']
})
export class DesiertoComponent {

  constructor(private title : Title, private seo:SeoService) { } 
  ngOnInit(): void {
      // add new tag
      let t:string="Desierto florido";
     this.title.setTitle(t)
     this.seo.generateTags({
      title:"Futuro Parque Nacional Desiero Florido",
      description:"200 plantas endémicas serán protegidas",
      slug:"/desierto-component",
      image:"https://efectomariposa.org/cpg/albums/userpics/10001/1/normal_desierto_florido.jpg"
     })
    }

}