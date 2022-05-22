import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadeServiceService {

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

  getCidades() {
    return this.http.get(`${this.uri}/cidades`, this.httpOptions);
  }
}
