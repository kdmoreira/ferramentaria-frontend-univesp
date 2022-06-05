import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ferramentas-crud',
  templateUrl: './ferramentas-crud.component.html',
  styleUrls: ['./ferramentas-crud.component.css']
})
export class FerramentasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFerramentaCreate(): void {
    this.router.navigate(['/ferramentas/create']);
  }

}