import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngresarService {
  baseurl = environment.servidor;

  constructor(private http: HttpClient) {}

  login(datos) {
    return this.http.post(`${this.baseurl}/api/auth/login`, datos);
  }
}
