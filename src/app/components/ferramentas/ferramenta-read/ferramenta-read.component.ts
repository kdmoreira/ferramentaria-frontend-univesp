import { Component, OnInit } from '@angular/core';
import { FerramentaService } from '../ferramenta.service';
import { FerramentaListagem, FerramentaRead } from './ferramenta-read.model';

@Component({
  selector: 'app-ferramenta-read',
  templateUrl: './ferramenta-read.component.html',
  styleUrls: ['./ferramenta-read.component.css']
})
export class FerramentaReadComponent implements OnInit {

  ferramentas: FerramentaRead[] = [];

  listagem: FerramentaListagem = {
    data: this.ferramentas,
    count: 0
  }
  
  displayedColumns: string[] = ['codigo', 'descricao', 'status', 'action'];
  
  constructor(private ferramentaService: FerramentaService) { }

  ngOnInit(): void {
    this.ferramentaService.read().subscribe(listagem => {
      this.ferramentas = listagem.data;
      console.log(listagem.data);
    })
  }

}
