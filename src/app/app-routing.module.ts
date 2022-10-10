import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnimalesComponent } from './animales/animales.component';
import { AireComponent } from './aire/aire.component';
import { MarComponent } from './mar/mar.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { TierraComponent } from './tierra/tierra.component';
import { NewssectionbComponent } from './newssectionb/newssectionb.component';

const routes: Routes = [

   
  { path:'' , component: PortadaComponent },
  { path:'contacto-component' , component: ContactoComponent },
  { path:'animales-component' , component: AnimalesComponent },
  { path:'aire-component' , component: AireComponent },
  { path:'mar-component' , component: MarComponent },
  { path:'investigacion-component' , component:InvestigacionComponent },
  {path:'tierra-component' , component:TierraComponent },
  {path: 'NewssectionbComponent', component: NewssectionbComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
