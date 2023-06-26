import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Lista } from './Lista';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lista = [
      { id: 1, nome: 'Arroz', quantidade: 2},
      { id: 2, nome: 'Feijão', quantidade: 3},
      { id: 3, nome: 'Batata', quantidade: 5},
      { id: 4, nome: 'Frango', quantidade: 7},
      { id: 5, nome: 'Leite', quantidade: 6},
      { id: 6, nome: 'Biscoito', quantidade: 4}
    ];
    return {lista};
  }
  genId(lista: Lista[]): number {
    return lista.length > 0 ? Math.max(...lista.map(Lista => Lista.id)) + 1 : 11;
  }
}