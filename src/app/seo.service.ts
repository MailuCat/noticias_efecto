import { Injectable } from '@angular/core';
import {Meta} from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SeoService {
  

  constructor(private meta: Meta) {	}
    
    generateTags(config: { title?: any; description?: any; image?: any; slug?: any; }){
      config = {
          title: "Seo Efecto",
          description: "soy descripcion de seo service",
          image: "",
          slug: "",
          ...config

      }       
this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
this.meta.updateTag({ name: 'twitter:site', content: '@MiTwitter' });
this.meta.updateTag({ name: 'twitter:title', content: config.title });
this.meta.updateTag({ name: 'twitter:description', content: config.description });
this.meta.updateTag({ name: 'twitter:image', content: config.image });

this.meta.updateTag({ property: 'og:type', content: 'article' });
this.meta.updateTag({ property: 'og:site_name', content: 'My Website Name' });
this.meta.updateTag({ property: 'og:title', content: config.title });
this.meta.updateTag({ property: 'og:description', content: config.description });
this.meta.updateTag({ property: 'og:image', content: config.image });
this.meta.updateTag({ property: 'og:url', content: `http://noticias.efectomariposa.org/$
{config.slug}` });

  
    
    }
}

