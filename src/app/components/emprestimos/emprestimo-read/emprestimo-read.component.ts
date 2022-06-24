import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmprestimoService } from '../emprestimo.service';
import { EmprestimoListagem, EmprestimoRead } from './emprestimo-read.model';

@Component({
  selector: 'app-emprestimo-read',
  templateUrl: './emprestimo-read.component.html',
  styleUrls: ['./emprestimo-read.component.css']
})
export class EmprestimoReadComponent implements OnInit {

  emprestimos: EmprestimoRead[] = [];

  listagem: EmprestimoListagem = {
    data: this.emprestimos,
    count: 0
  }
  
  displayedColumns: string[] = 
  ['codigo', 'ferramenta', 'colaboradorMatricula', 'dataEmprestimo', 
  'dataDevolucao', 'status', 'action'];
  
  constructor(private emprestimoService: EmprestimoService,
    private router: Router) { }

  ngOnInit(): void {
    this.emprestimoService.read().subscribe(listagem => {
      this.emprestimos = listagem.data;
      console.log(listagem.data);
    })
  }

  returnEmprestimo(emprestimoID: string): void {
    this.emprestimoService.update(emprestimoID).subscribe(() => {
      this.router.navigate(['/emprestimos'])
      .then(() => {
        window.location.reload();        
      });
      this.emprestimoService.showMessage('Empréstimo devolvido com sucesso!');      
    });    
  }

}
