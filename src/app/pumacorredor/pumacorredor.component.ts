import { BrowserModule, Meta, } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-pumacorredor',
  templateUrl: './pumacorredor.component.html',
  styleUrls: ['./pumacorredor.component.scss']
})


export class PumacorredorComponent implements OnInit {
 
  title= "Hola soy Huemul"
  constructor(private  meta: Meta ) {

		//Set Open Graph
	  	//this.meta.updateTag({property: 'og:title', content: 'todo'});
	  	/*this.meta.updateTag({property: 'og:image', content: './assets/desierto_florido.jpg'});
	  	this.meta.updateTag({property: 'og:url', content: 'https://noticias.efectomariposa.org/pumacorredor-component'})  */
	}
  ngOnInit(): void {
    this.meta.addTag( { name: "description", content:"Meta description goes here." } );
    this.meta.addTag( { name: "description", content:"Meta description goes here." } );
  }
}
