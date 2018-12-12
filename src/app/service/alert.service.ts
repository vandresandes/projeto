import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
      // mensagem de alerta clara na mudança de rota
      router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterNavigationChange) {
                  // manter apenas para uma única mudança de local
                  this.keepAfterNavigationChange = false;
              } else {
                  // limpar alert
                  this.subject.next();
              }
          }
      });
  }

  success(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
