import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataPgeService {

  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(url).map(res=> res);
  }

}