import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodigoValidacaoService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(url).map(res=> res);
  }
}
