import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ColaboradorService } from '../colaborador.service';
import { PerfilEnum } from '../perfil-enum.model';
import { RoleEnum } from '../role-enum.model';
import { ColaboradorCreate } from './colaborador-create.model';


@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: ColaboradorCreate = {
    id: undefined,
    cpf: "",
    matricula: "",
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cargo: "",
    empresa: "",
    supervisorID: undefined,
    perfil: PerfilEnum.COLABORADOR,
    role: RoleEnum.COLABORADOR
  }

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  createColaborador(): void {
    this.colaboradorService.create(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage('Colaborador cadastrado!');
      this.router.navigate(['/colaboradores']);
    });

  }

  cancel(): void {
    this.router.navigate(['/colaboradores']);
  }

}
