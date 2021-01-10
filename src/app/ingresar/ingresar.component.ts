import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IngresarService } from './ingresar.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private ingresarService: IngresarService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  ingresar() {
    console.log(this.loginForm.value);
    this.ingresarService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', btoa(JSON.stringify(res)));
        //correcto
        this.toastr.success('Inicio de sesion!', 'Correcto!');
        this.route.navigate(['/admin']);
      },
      (error: any) => {
        console.log(error);
        //incorrecto
      }
    );
  }
}
