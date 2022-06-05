import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { ColaboradoresCrudComponent } from './views/colaboradores-crud/colaboradores-crud.component';
import { ColaboradorCreateComponent } from './components/colaboradores/colaborador-create/colaborador-create.component';
import { ColaboradorReadComponent } from './components/colaboradores/colaborador-read/colaborador-read.component';
import { ColaboradorUpdateComponent } from './components/colaboradores/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './components/colaboradores/colaborador-delete/colaborador-delete.component';
import { FerramentasCrudComponent } from './views/ferramentas-crud/ferramentas-crud.component';
import { FerramentaCreateComponent } from './components/ferramentas/ferramenta-create/ferramenta-create.component';
import { FerramentaReadComponent } from './components/ferramentas/ferramenta-read/ferramenta-read.component';
import { FerramentaUpdateComponent } from './components/ferramentas/ferramenta-update/ferramenta-update.component';
import { FerramentaDeleteComponent } from './components/ferramentas/ferramenta-delete/ferramenta-delete.component';
import { EmprestimosCrudComponent } from './views/emprestimos-crud/emprestimos-crud.component';
import { EmprestimoCreateComponent } from './components/emprestimos/emprestimo-create/emprestimo-create.component';
import { EmprestimoReadComponent } from './components/emprestimos/emprestimo-read/emprestimo-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ColaboradoresCrudComponent,
    ColaboradorCreateComponent,
    ColaboradorReadComponent,
    ColaboradorUpdateComponent,
    ColaboradorDeleteComponent,
    FerramentasCrudComponent,
    FerramentaCreateComponent,
    FerramentaReadComponent,
    FerramentaUpdateComponent,
    FerramentaDeleteComponent,
    EmprestimosCrudComponent,
    EmprestimoCreateComponent,
    EmprestimoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
