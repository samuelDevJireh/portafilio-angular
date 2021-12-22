import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  //rutas que la aplicacion manejara
  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'search/:busqueda',component:SearchComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}//este es como el defult
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
