import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimos-crud',
  templateUrl: './emprestimos-crud.component.html',
  styleUrls: ['./emprestimos-crud.component.css']
})
export class EmprestimosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEmprestimoCreate(): void {
    this.router.navigate(['/emprestimos/create']);
  }

}
