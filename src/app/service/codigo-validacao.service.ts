import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodigoValidacaoService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ZWNtOkNkMHBQZzM='
      })
    };
    return this.httpClient.get(url, httpOptions).map(res=> res);
  }
}
