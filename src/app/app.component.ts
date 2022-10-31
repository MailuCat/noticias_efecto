import { Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent    {
  title = 'actualidad';

  constructor(private metaService:Meta){
    //this.addTag();
  }
 
 addTag(){
   this.metaService.addTags([
      { name: 'description', 
        content: 'Article Description' 
      },
      { name: 'robots', content: 'index,follow' },
      { property: 'og:title', content: 'Content Title' }
   ]);
  }
}

//Primera prueba  Mantener esto pero quitar open graph del index 
//constructor(private metaService:Meta){
  //this.addTag();


/* addTag(){
 this.metaService.addTags([
    { name: 'description', 
      content: 'Article Description' 
    },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:title', content: 'Content Title' }
 ]);
}*/

