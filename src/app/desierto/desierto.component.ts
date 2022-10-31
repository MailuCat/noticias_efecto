import { BrowserModule, Meta, } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desierto',
  templateUrl: './desierto.component.html',
  styleUrls: ['./desierto.component.scss']
})
export class DesiertoComponent {

  constructor(private meta:Meta){}
    OnInit() {
      // add new tag
      this.meta.addTag({ name: "description", content:"Meta description goes here." });
  
      // update meta tag
      this.meta.updateTag( { name: "description", content:"No meta found." }, "name='description'");
    }

}