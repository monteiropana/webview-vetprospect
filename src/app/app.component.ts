import { VeterinarioService } from './services/veterinario.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  ];
  constructor(private vetService: VeterinarioService) {
    vetService.getVeterinarios().subscribe(payload => {
      console.log(payload);
    },
    error => {
      console.log('DEU ERRO AQUI ' + error);
    });
  }
}
