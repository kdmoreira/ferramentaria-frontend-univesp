import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-colaboradores-crud',
  templateUrl: './colaboradores-crud.component.html',
  styleUrls: ['./colaboradores-crud.component.css']
})
export class ColaboradoresCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToColaboradorCreate(): void {
    this.router.navigate(['/colaboradores/create']);
  }
}
