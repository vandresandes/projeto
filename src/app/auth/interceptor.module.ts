import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  HttpEvent,  HttpInterceptor,  HttpHandler,  HttpRequest, HttpResponse, } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
  
  const authReq = req.clone({
    headers: req.headers.set('Authorization', this.getAuthorization())
  });
  return next.handle(authReq);
  }
  
  getAuthorization() {
	return "Basic " + window.btoa("ecm:Cd0pPg3");
  }
}


@NgModule({
providers: [
 {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsRequestInterceptor,
  multi: true,
 },
],
})

export class Interceptor {}