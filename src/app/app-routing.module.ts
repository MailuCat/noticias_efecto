import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnimalesComponent } from './animales/animales.component';
import { AireComponent } from './aire/aire.component';
import { MarComponent } from './mar/mar.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';

/*Import de noticias*/

import { DesiertoComponent } from './desierto/desierto.component';
import { GasesComponent } from './gases/gases.component';
import { HormigaComponent } from './hormiga/hormiga.component';
import { PerrosComponent } from './perros/perros.component';
import { PlasticoComponent } from './plastico/plastico.component';
import { PumacorredorComponent } from './pumacorredor/pumacorredor.component';
import { TierraComponent } from './tierra/tierra.component';
import { VeganismoComponent } from './veganismo/veganismo.component';

const routes: Routes = [

   
  { path:'' , component: PortadaComponent },
  { path:'contacto-component' , component: ContactoComponent },
  { path:'animales-component' , component: AnimalesComponent },
  { path:'aire-component' , component: AireComponent },
  { path:'mar-component' , component: MarComponent },
  { path:'investigacion-component' , component:InvestigacionComponent },
  {path:'tierra-component' , component:TierraComponent },
    
    /*Rutas a noticias*/
  
    {path:'desierto-component' , component: DesiertoComponent },
    {path:'gases-component' , component:GasesComponent },
    {path:'hormiga-component' , component:HormigaComponent },
    {path:'perros-component' , component:PerrosComponent },
    {path:'plastico-component' , component:PlasticoComponent },
    {path:'pumacorredor-component' , component:PumacorredorComponent },
    {path:'tierra-component' , component:TierraComponent },
    {path:'veganismo-component' , component:VeganismoComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
