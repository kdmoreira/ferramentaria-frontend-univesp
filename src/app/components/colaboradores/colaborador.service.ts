import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColaboradorCreate, ColaboradorCreateRequest, ColaboradorCreateUI } from './colaborador-create/colaborador-create.model';
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

  create(colaborador: ColaboradorCreateUI): Observable<ColaboradorCreateRequest> {

    let colaboradorPayload: ColaboradorCreateRequest = {
      cpf: colaborador.cpf,
      cargo: colaborador.cargo,
      email: colaborador.email,
      empresa: colaborador.empresa,
      matricula: colaborador.matricula,
      nome: colaborador.nome,
      perfil: colaborador.perfil.value,
      role: colaborador.role.value,
      sobrenome: colaborador.sobrenome,
      telefone: colaborador.telefone,
      supervisorID: colaborador.supervisorID    
    };

    return this.http.post<ColaboradorCreateRequest>(`${environment.API_URL.base}${this.path}`, 
    colaboradorPayload).pipe(
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

  readById(id: string): Observable<ColaboradorCreateRequest> {
    const url = `${environment.API_URL.base}${this.path}/${id}`;
    return this.http.get<ColaboradorCreateRequest>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(colaborador: ColaboradorCreateRequest): Observable<ColaboradorCreateRequest> {
    const url = `${environment.API_URL.base}${this.path}`;
    return this.http.put<ColaboradorCreateRequest>(url, colaborador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(colaborador: ColaboradorCreateRequest): Observable<ColaboradorCreateRequest> {
    const url = `${environment.API_URL.base}${this.path}/Inativar?id=${colaborador.id}`;
    return this.http.put<ColaboradorCreateRequest>(url, colaborador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: HttpErrorResponse): Observable<any> {
    this.showMessage(e.error.Message, true);
    return EMPTY;
  }
}