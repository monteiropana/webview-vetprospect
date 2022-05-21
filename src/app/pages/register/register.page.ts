import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  isVet: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: Usuario;
  veterinario = {
    label: 'Veteriário',
    value: false
  }

  constructor() { }

  ngOnInit() {
    this.user = {} as Usuario;
  }

}
