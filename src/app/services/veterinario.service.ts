import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  uri = 'http://localhost:8080/api/v1';
  headers = new HttpHeaders();
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic ' + btoa('vet:prospect'));

    this.httpOptions = {
      headers: this.headers
    };
  }

  getVeterinarios() {
    return this.http.get(`${this.uri}/veterinarios`, this.httpOptions);
  }

  getVeterinarioPorId(id: number) {
    return this.http.get(`${this.uri}/veterinario/${id}`, this.httpOptions);
  }

  addVeterinario(vet: any) {
    return this.http.post(`${this.uri}/veterinario`, vet, this.httpOptions);
  }

  alterarVeterinario(vet: any) {
    return this.http.patch(`${this.uri}/veterinario`, vet, this.httpOptions);
  }
}
