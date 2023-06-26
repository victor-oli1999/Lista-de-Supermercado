import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';

/* Em baixo é onde mostra que tela mostrar dependendo da URL  */
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'Lista', component: ListaComponent },
  { path: 'Inicio', component: InicioComponent }
  /*O : indica que é um placeholder a um determinado hero id.*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
