import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  constructor(private http_client: HttpClient) {}

  listar() {
    return this.http_client.get('https://jsonplaceholder.typicode.com/todos/');
  }

  store(data) {}

  update(id, datos) {}
  destroy(id) {}
}
