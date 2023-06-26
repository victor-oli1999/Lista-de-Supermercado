import { Component } from '@angular/core';
import { Lista } from './Lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista De Supermercado';
  Lista: Lista = {
    id: 1,
    nome: 'Frango',
    quantidade: 1
  }
}
