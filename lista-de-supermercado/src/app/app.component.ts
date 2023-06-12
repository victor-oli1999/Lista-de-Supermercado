import { Component } from '@angular/core';
import { Lista } from './Lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-de-supermercado';
  Lista: Lista = {
    id: 1,
    name: 'Frango'
  }
}
