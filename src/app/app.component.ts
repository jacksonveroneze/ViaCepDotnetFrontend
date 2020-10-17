import { Cep } from './models/cep';
import { CepService } from './services/cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViaCepDotnetFrontend';

  cep = {} as Cep;

  searchCepInput = '';

  constructor(private cepService: CepService) { }

  async search() {
    if (this.searchCepInput === '') {
      alert('Informe o cep para efetuar a busca.');

      return;
    }

    this.cep = await this.cepService.search(this.searchCepInput);
  }
}
