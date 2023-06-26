import { Component, OnInit } from '@angular/core';
import { Lista } from '../Lista';
import { LISTAGEM } from '../data-mock'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  Lista = LISTAGEM;
  
  
}
