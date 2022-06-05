import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FerramentaCreate } from '../ferramenta-create/ferramenta-create.model';
import { FerramentaService } from '../ferramenta.service';

@Component({
  selector: 'app-ferramenta-update',
  templateUrl: './ferramenta-update.component.html',
  styleUrls: ['./ferramenta-update.component.css']
})
export class FerramentaUpdateComponent implements OnInit {

  ferramenta!: FerramentaCreate;

  constructor(
    private ferramentaService: FerramentaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.ferramentaService.readById(id).subscribe(ferramenta => {
      this.ferramenta = ferramenta;
      console.log(ferramenta);
    })    
  }

  updateFerramenta(): void {
    this.ferramentaService.update(this.ferramenta).subscribe(() => {
      this.ferramentaService.showMessage('Ferramenta atualizada com sucesso!');
      this.router.navigate(['/ferramentas']);
    })
  }

  cancel(): void {
    this.router.navigate(['/ferramentas']);
  }

}
