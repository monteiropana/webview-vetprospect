import { VeterinarioService } from './../../services/veterinario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  veterinarios: any;

  constructor(private vetService: VeterinarioService) { }

  ngOnInit() {
    this.vetService.getVeterinarios().subscribe(vet => {
      this.veterinarios = vet;
    });
  }
}
