import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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
    NewssectionbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
