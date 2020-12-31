import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  lista_servicios: any = [];

  constructor() {
    this.lista_servicios.push({
      nombre: 'Servicio de Limpieza',
      detalle: 'Prueba',
    });
    this.lista_servicios.push({
      nombre: 'Servicio de Limpieza',
      detalle: 'Prueba',
    });

    this.lista_servicios.push({
      nombre: 'Servicio de Limpieza',
      detalle: 'Prueba',
    });
    this.lista_servicios.push({
      nombre: 'Servicio de Limpieza',
      detalle: 'Prueba',
    });
    this.lista_servicios.push({
      nombre: 'Servicio de Limpieza',
      detalle: 'Prueba',
    });
  }

  ngOnInit(): void {}
}
