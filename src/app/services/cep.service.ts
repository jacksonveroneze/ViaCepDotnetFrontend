import { Cep } from './../models/cep';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  searchCep(data: string): Promise<Cep> {
    return this.httpClient.get<Cep>(`${environment.urlServer}/search/zip-code/${data}`).toPromise();
  }

  searchState(data: string): Promise<Cep[]> {
    return this.httpClient.get<Cep[]>(`${environment.urlServer}/search/state/${data}`).toPromise();
  }
}
