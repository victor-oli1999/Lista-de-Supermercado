import { Injectable } from '@angular/core';
import { Lista } from './Lista';
import { LISTAGEM } from './data-mock';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private listaUrl = 'api/lista';  // URL para API Web

  getLista(): Observable<Lista[]> {
    return this.http.get<Lista[]>(this.listaUrl)
      .pipe(
        tap(_ => this.log('fetched lista')),
        catchError(this.handleError<Lista[]>('getListas', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getListas(id: number): Observable<Lista> {
    const url = `${this.listaUrl}/${id}`;
    return this.http.get<Lista>(url).pipe(
      tap(_ => this.log(`fetched lista id=${id}`)),
      catchError(this.handleError<Lista>(`getLista id=${id}`))
    );
  }
}
