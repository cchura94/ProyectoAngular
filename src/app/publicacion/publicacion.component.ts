import { Component, OnInit } from '@angular/core';

import { PublicacionService } from './publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
  publicaciones: any;
  cargando: boolean = false;

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.publicacionService.listar().subscribe(
      (res: any) => {
        console.log(res);
        this.publicaciones = res;
        this.cargando = false;
      },
      (error: any) => {
        console.log('Error al recuperar los datos');
        this.cargando = false;
      }
    );
  }
}
