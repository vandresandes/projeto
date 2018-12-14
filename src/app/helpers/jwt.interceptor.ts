import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // adicionar header de autorização com token jwt, se disponível

        let currentUser = this.authenticationService.currentUserValue;

        if (currentUser && currentUser.token) {
          console.log(currentUser.token);

          request = request.clone({
            setHeaders: {
              // Remover o comentário abaixo quando implementar o back-end
              // Authorization: `Bearer ${currentUser.token}`
            }
          });
        }

        return next.handle(request);
    }
}
