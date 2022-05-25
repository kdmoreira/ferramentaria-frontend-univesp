import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ColaboradoresCrudComponent } from './views/colaboradores-crud/colaboradores-crud.component';
import { ColaboradorCreateComponent } from './components/colaboradores/colaborador-create/colaborador-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "colaboradores",
    component: ColaboradoresCrudComponent
  },
  {
    path: "colaboradores/create",
    component: ColaboradorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
