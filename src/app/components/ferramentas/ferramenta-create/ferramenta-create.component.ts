import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { FerramentaService } from '../ferramenta.service';
import { FerramentaCreate } from './ferramenta-create.model';

@Component({
  selector: 'app-ferramenta-create',
  templateUrl: './ferramenta-create.component.html',
  styleUrls: ['./ferramenta-create.component.css']
})
export class FerramentaCreateComponent implements OnInit {

  ferramenta: FerramentaCreate = {
    id: undefined,
    codigo: "",
    descricao: "",
    quantidadeTotal: 0,
    valorCompra: 0,
    localizacao: "",
    numeroPatrimonial: "",
    fabricante: "",
    categoriaID: "5138f09b-7dc6-4e06-a983-c182e6d7d173"
  }

  constructor(private router: Router,
    private ferramentaService: FerramentaService) { }

  ngOnInit(): void {
  }

  createFerramenta(): void {
    this.ferramentaService.create(this.ferramenta).subscribe(() => {
      this.ferramentaService.showMessage('Ferramenta cadastrada!');
      this.router.navigate(['/ferramentas']);
    });
  }

  cancel(): void {
    this.router.navigate(['/ferramentas']);
  }

}
