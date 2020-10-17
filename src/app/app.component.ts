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

  ceps: Cep[] = new Array();

  searchInput = '';
  searchInputPlaceholder = 'Antes de buscar, selecione uma das opções: CEP/UF';
  optionInput = '';
  isLoading = false;

  constructor(private cepService: CepService) { }

  changeSearchInputInfo() {
    if (this.optionInput === 'cep') {
      this.searchInputPlaceholder = 'Informe o CEP. Ex: 89665-000';
    }
    else {
      this.searchInputPlaceholder = 'Informe o estado. Ex: SC';
    }

    this.searchInput = '';
  }

  async search() {
    this.ceps = new Array();

    if (this.optionInput === 'cep') {
      if (this.searchInput.length !== 9 || this.searchInput.match(/\d{5}\-\d{3}/) === null) {
        alert('O CEP informado não está no formato correto.');

        return;
      }

      this.isLoading = true;

      this.ceps.push(await this.cepService.searchCep(this.searchInput));
    }
    else {
      if (this.searchInput.length !== 2) {
        alert('O UF informado não está no formato correto.');

        return;
      }

      this.isLoading = true;

      this.ceps = await this.cepService.searchState(this.searchInput);
    }

    this.isLoading = false;
  }
}
