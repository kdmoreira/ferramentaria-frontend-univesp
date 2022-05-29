import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { ColaboradorListagem, ColaboradorRead } from './colaborador-read.model';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})
export class ColaboradorReadComponent implements OnInit {

  colaboradores: ColaboradorRead[] = [];

  listagem: ColaboradorListagem = {
    data: this.colaboradores,
    count: 0
  }
  
  displayedColumns: string[] = ['matricula', 'nomeCompleto', 'situacaoEmprestimo', 'action'];
  
  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.read().subscribe(listagem => {
      this.colaboradores = listagem.data;
      console.log(listagem.data);
    })
  }

}
