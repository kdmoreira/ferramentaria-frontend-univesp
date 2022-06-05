import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmprestimoService } from '../emprestimo.service';
import { EmprestimoCreate } from './emprestimo-create.model';

@Component({
  selector: 'app-emprestimo-create',
  templateUrl: './emprestimo-create.component.html',
  styleUrls: ['./emprestimo-create.component.css']
})
export class EmprestimoCreateComponent implements OnInit {

  emprestimo: EmprestimoCreate = {
    ferramentaID: "",
    colaboradorID: "",
    quantidade: 0,
    prazoEmDias: 0,
    observacao: "",
    senhaColaborador: ""
  }
  constructor(private router: Router,
    private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
  }

  createEmprestimo(): void {
    this.emprestimoService.create(this.emprestimo).subscribe(() => {
      this.emprestimoService.showMessage('Empréstimo realizado!');
      this.router.navigate(['/emprestimos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/emprestimos']);
  }

}
