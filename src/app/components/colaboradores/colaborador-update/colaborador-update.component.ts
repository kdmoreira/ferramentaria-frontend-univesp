import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorCreate, ColaboradorCreateRequest } from '../colaborador-create/colaborador-create.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

  colaboradorCreate!: ColaboradorCreateRequest;

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.colaboradorService.readById(id).subscribe(colaborador => {
      this.colaboradorCreate = colaborador;
      console.log(colaborador);
    })    
  }

  updateColaborador(): void {
    this.colaboradorService.update(this.colaboradorCreate).subscribe(() => {
      this.colaboradorService.showMessage('Colaborador atualizado com sucesso!');
      this.router.navigate(['/colaboradores']);
    })
  }

  cancel(): void {
    this.router.navigate(['/colaboradores']);
  }
}
