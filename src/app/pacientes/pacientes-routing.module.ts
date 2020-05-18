import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPacientesComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'pacientes/buscar', component: SearchPacientesComponent },
  { path: 'pacientes/crear', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
