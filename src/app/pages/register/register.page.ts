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
  cidade: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  vet: Veterinario;

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
  }

  selecionarCidade(idCidade: number) {
    this.cidadeSelecionada = idCidade;
  }

  salvarVeterinario() {
    this.vet.endereco.cidade = this.cidadeSelecionada;
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
