import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ColaboradoresCrudComponent } from './views/colaboradores-crud/colaboradores-crud.component';
import { ColaboradorCreateComponent } from './components/colaboradores/colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './components/colaboradores/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './components/colaboradores/colaborador-delete/colaborador-delete.component';
import { FerramentasCrudComponent } from './views/ferramentas-crud/ferramentas-crud.component';
import { FerramentaCreateComponent } from './components/ferramentas/ferramenta-create/ferramenta-create.component';
import { FerramentaUpdateComponent } from './components/ferramentas/ferramenta-update/ferramenta-update.component';
import { FerramentaDeleteComponent } from './components/ferramentas/ferramenta-delete/ferramenta-delete.component';
import { EmprestimosCrudComponent } from './views/emprestimos-crud/emprestimos-crud.component';
import { EmprestimoCreateComponent } from './components/emprestimos/emprestimo-create/emprestimo-create.component';

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
  },
  {
    path: "colaboradores/update/:id",
    component: ColaboradorUpdateComponent
  },
  {
    path: "colaboradores/delete/:id",
    component: ColaboradorDeleteComponent
  },
  {
    path: "ferramentas",
    component: FerramentasCrudComponent
  },
  {
    path: "ferramentas/create",
    component: FerramentaCreateComponent
  },
  {
    path: "ferramentas/update/:id",
    component: FerramentaUpdateComponent
  },
  {
    path: "ferramentas/delete/:id",
    component: FerramentaDeleteComponent
  },
  {
    path: "emprestimos",
    component: EmprestimosCrudComponent
  },
  {
    path: "emprestimos/create",
    component: EmprestimoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
