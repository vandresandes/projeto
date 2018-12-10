import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public token: string;
  private url = "/dctm-rest/repositories/PGE_DEV1";

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username: username, password: password })
      .pipe(
        map(user => {
          // login bem-sucedido se houver um token jwt na resposta
          if (user && user.token) {
            // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
          }
          return user;
        })
      );
  }

  logout(): void {
    // Limpa o token removendo o usuário do local store para efetuar o logout
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
