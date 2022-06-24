import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-typescript';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';
import { FerramentaCreate } from './ferramenta-create/ferramenta-create.model';
import { FerramentaListagem } from './ferramenta-read/ferramenta-read.model';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService extends BaseService {

  path = "ferramenta"
  numeroPagina = 0;
  tamanhoPagina = 40;

  constructor(public override snackBar: MatSnackBar, private http: HttpClient) {
    super(snackBar);
  }

  create(ferramenta: FerramentaCreate): Observable<FerramentaCreate> {
    return this.http.post<FerramentaCreate>(`${environment.API_URL.base}${this.path}`, 
    ferramenta).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<FerramentaListagem> {
    let pageParam = `numeroPagina=${this.numeroPagina}`;
    let countParam = `tamanhoPagina=${this.tamanhoPagina}`;
    return this.http
    .get<FerramentaListagem>
    (`${environment.API_URL.base}${this.path}?${pageParam}&${countParam}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<FerramentaCreate> {
    const url = `${environment.API_URL.base}${this.path}/${id}`;
    return this.http.get<FerramentaCreate>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(ferramenta: FerramentaCreate): Observable<FerramentaCreate> {
    
    ferramenta.categoriaID = "5138f09b-7dc6-4e06-a983-c182e6d7d173";

    const url = `${environment.API_URL.base}${this.path}`;
    return this.http.put<FerramentaCreate>(url, ferramenta).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(ferramenta: FerramentaCreate): Observable<FerramentaCreate> {
    const url = `${environment.API_URL.base}${this.path}/Inativar?id=${ferramenta.id}`;
    return this.http.put<FerramentaCreate>(url, ferramenta).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
