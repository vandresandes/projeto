import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  firstClick() {
    return console.log('DataService.firstClick.clicked');
  }

  getUsers() {
    return null;//this.http.get('https://reqres.in/api/users');
  }

}