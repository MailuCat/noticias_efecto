 import { Component, OnInit } from '@angular/core';
 import { Contacto } from '../contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  model: Contacto = new Contacto('', '', '');
 
  submitted = false;

  onSubmit() { this.submitted = true; }



  ngOnInit(): void {
  }

}
