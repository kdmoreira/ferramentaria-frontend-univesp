import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColaboradorCreate } from './colaborador-create/colaborador-create.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  path = "colaborador"

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

  errorHandler(e: HttpErrorResponse): Observable<any> {
    this.showMessage(e.error.Message, true);
    return EMPTY;
  }
}
