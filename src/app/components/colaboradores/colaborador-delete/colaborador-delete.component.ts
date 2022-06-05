import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorCreate, ColaboradorCreateRequest } from '../colaborador-create/colaborador-create.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {

  colaborador!: ColaboradorCreateRequest;

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.colaboradorService.readById(id).subscribe(colaborador => {
      this.colaborador = colaborador;
    })
  }

  deleteColaborador(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.colaboradorService.delete(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage("Colaborador inativado com sucesso!");
      this.router.navigate(['/colaboradores']);
    })
  }

  cancel(): void {
    this.router.navigate(['/colaboradores']);
  }
}
