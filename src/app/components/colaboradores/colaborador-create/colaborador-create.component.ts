import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import { PerfilEnum } from '../perfil-enum.model';
import { Perfil } from '../perfil.model';
import { RoleEnum } from '../role-enum.model';
import { Role } from '../role.model';
import { ColaboradorCreateUI } from './colaborador-create.model';


@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: ColaboradorCreateUI = {
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
    perfil: {value: PerfilEnum.COLABORADOR, viewValue: 'Colaborador'},
    role: {value: RoleEnum.COLABORADOR, viewValue: 'Colaborador'}
  }

  perfis: Perfil[] = [
    {value: PerfilEnum.COLABORADOR, viewValue: 'Colaborador'},
    {value: PerfilEnum.SUPERVISOR, viewValue: 'Supervisor'},
    {value: PerfilEnum.GERENTE, viewValue: 'Gerente'}
  ];

  roles: Role[] = [
    {value: RoleEnum.ADMINISTRADOR, viewValue: 'Administrador'},
    {value: RoleEnum.COLABORADOR, viewValue: 'Colaborador'}
  ];

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
