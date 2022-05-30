import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColaboradorCreate } from './colaborador-create/colaborador-create.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColaboradorListagem, ColaboradorRead } from './colaborador-read/colaborador-read.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  path = "colaborador"
  numeroPagina = 0;
  tamanhoPagina = 40;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(colaborador: ColaboradorCreate): Observable<ColaboradorCreate> {
    return this.http.post<ColaboradorCreate>(`${environment.API_URL.base}${this.path}`, 
    colaborador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<ColaboradorListagem> {
    let pageParam = `numeroPagina=${this.numeroPagina}`;
    let countParam = `tamanhoPagina=${this.tamanhoPagina}`;
    return this.http
    .get<ColaboradorListagem>
    (`${environment.API_URL.base}${this.path}?${pageParam}&${countParam}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<ColaboradorCreate> {
    const url = `${environment.API_URL.base}${this.path}/${id}`;
    return this.http.get<ColaboradorCreate>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(colaborador: ColaboradorCreate): Observable<ColaboradorCreate> {
    const url = `${environment.API_URL.base}${this.path}`;
    return this.http.put<ColaboradorCreate>(url, colaborador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(colaborador: ColaboradorCreate): Observable<ColaboradorCreate> {
    const url = `${environment.API_URL.base}${this.path}/Inativar?id=${colaborador.id}`;
    return this.http.put<ColaboradorCreate>(url, colaborador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: HttpErrorResponse): Observable<any> {
    this.showMessage(e.error.Message, true);
    return EMPTY;
  }
}