import { Component, OnInit } from '@angular/core';
import { Lista } from '../Lista';
import { ListaService } from '../lista.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  selectedLista?: Lista;
  lista: Lista[] = [];

  constructor(private listaService: ListaService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getListas();
  }
  getListas(): void {
    this.listaService.getLista()
    .subscribe(lista => this.lista = lista);
  }
  onSelect(lista: Lista): void {
    this.selectedLista = lista;
    this.messageService.add(`ListaComponent: Selected Lista id=${lista.id}`);
  }
  
  
}
