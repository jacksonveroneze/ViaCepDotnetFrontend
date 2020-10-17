import { Cep } from './../models/cep';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  url = 'https://localhost:5001/search-cep';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  search(data: string): Promise<Cep> {
    return this.httpClient.get<Cep>(`${this.url}/${data}`).toPromise();
  }
}
