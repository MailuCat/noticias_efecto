import { BrowserModule, Meta, } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AireComponent } from './aire/aire.component';
import { PortadaComponent } from './portada/portada.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TierraComponent } from './tierra/tierra.component';
import { AnimalesComponent } from './animales/animales.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { MarComponent } from './mar/mar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewssectionbComponent } from './newssectionb/newssectionb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    AireComponent,
    PortadaComponent,
    NavBarComponent,
    FooterComponent,
    TierraComponent,
    AnimalesComponent,
    ContactoComponent,
    InvestigacionComponent,
    MarComponent,
    NewssectionbComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
        
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})


export class AppModule implements OnInit {

	constructor(private meta: Meta) {

		
	}
		ngOnInit(): void {}
}
