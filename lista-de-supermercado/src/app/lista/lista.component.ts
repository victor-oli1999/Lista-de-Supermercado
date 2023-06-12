import { Component } from '@angular/core';
import { Lista } from '../Lista';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  Lista: Lista = {
    id: 1,
    name: 'Frango'
  }
}
