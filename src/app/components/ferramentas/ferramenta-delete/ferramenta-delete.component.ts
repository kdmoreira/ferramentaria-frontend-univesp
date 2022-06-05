import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FerramentaCreate } from '../ferramenta-create/ferramenta-create.model';
import { FerramentaService } from '../ferramenta.service';

@Component({
  selector: 'app-ferramenta-delete',
  templateUrl: './ferramenta-delete.component.html',
  styleUrls: ['./ferramenta-delete.component.css']
})
export class FerramentaDeleteComponent implements OnInit {

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
    })
  }

  deleteFerramenta(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? "";
    this.ferramentaService.delete(this.ferramenta).subscribe(() => {
      this.ferramentaService.showMessage("Ferramenta inativada com sucesso!");
      this.router.navigate(['/ferramentas']);
    })
  }

  cancel(): void {
    this.router.navigate(['/ferramentas']);
  }

}
