import { Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent    {
  title = 'actualidad';
 
  constructor(private metaService:Meta){ }
  
}
