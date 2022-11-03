import { Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent    {
  title = 'actualidad';
  faTwitter = faTwitter;
  faFacebook = faFacebook
  constructor(private metaService:Meta){ }
}
