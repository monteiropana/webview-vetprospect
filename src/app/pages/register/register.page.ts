import { VeterinarioService } from './../../services/veterinario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormBuilder } from '@angular/forms';

export interface Veterinario {
  nome: string;
  especialidade: string;
  crmv: number;
  telefone: string;
  observacoes: string;
  endereco: Endereco;
}

export interface Endereco {
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: Cidade;
}

export interface Cidade {
  id: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  vet: Veterinario;
  crmv: string;

  cidades = [
    {
      id: 1,
      nome: 'Londrina'
    },
    {
      id: 2,
      nome: 'Osasco'
    }
  ];

  cidadeSelecionada: number;

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router) { }

  ngOnInit() {
    this.vet = {} as Veterinario;
    this.vet.endereco = {} as Endereco;
    this.vet.endereco.cidade = {} as Cidade;
  }

  selecionarCidade($event: any) {
    console.log($event.detail.value);
    // console.log(idCidade);
    this.cidadeSelecionada = Number($event.detail.value);
  }

  salvarVeterinario() {
    this.vet.endereco.cidade.id = this.cidadeSelecionada;
    this.vet.crmv = Number(this.crmv);
    this.veterinarioService.addVeterinario(this.vet).subscribe(
      () => {
        this.router.navigate(['/listagem']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
