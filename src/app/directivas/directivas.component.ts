import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  titulo: String;
  estado: Boolean = true;
  numero: Number;
  nombres: String[] = ['Juan', 'Ana', 'Pedro', 'Maria'];

  constructor() {
    this.titulo = 'Aprendiendo sobre Directivas';
  }

  ngOnInit(): void {}

  cambiarEstado() {
    this.estado = !this.estado;
  }
}
