import { Component, OnInit } from '@angular/core';
import { Lista } from '../Lista';
import { ListaService } from '../lista.service';
import { LISTAGEM } from '../data-mock'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  lista: Lista[] = [];

  constructor(private listaService: ListaService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getListas();
  }
  onSelect(lista: Lista): void {
    this.messageService.add(`ListaComponent: Selected Lista id=${lista.id}`);
  }
  getListas(): void {
    this.listaService.getLista()
        .subscribe(lista => this.lista = lista);
  }
}
