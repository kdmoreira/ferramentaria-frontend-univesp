import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';
import { EmprestimoCreate } from './emprestimo-create/emprestimo-create.model';
import { EmprestimoListagem } from './emprestimo-read/emprestimo-read.model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService extends BaseService {

  path = "emprestimo"
  numeroPagina = 0;
  tamanhoPagina = 40;

  constructor(public override snackBar: MatSnackBar, private http: HttpClient) {
    super(snackBar);
  }

  create(emprestimo: EmprestimoCreate): Observable<EmprestimoCreate> {
    return this.http.post<EmprestimoCreate>(`${environment.API_URL.base}${this.path}`, 
    emprestimo).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<EmprestimoListagem> {
    let pageParam = `numeroPagina=${this.numeroPagina}`;
    let countParam = `tamanhoPagina=${this.tamanhoPagina}`;
    return this.http
    .get<EmprestimoListagem>
    (`${environment.API_URL.base}${this.path}?${pageParam}&${countParam}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(emprestimoID: string): Observable<EmprestimoCreate> {   
    const url = `${environment.API_URL.base}${this.path}/?id=${emprestimoID}`;
    return this.http.put<EmprestimoCreate>(url, emprestimoID).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
