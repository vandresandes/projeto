import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { DomSanitizer } from "@angular/platform-browser";
import Viewer from 'viewerjs';
import * as $ from "jquery";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Validação de Documento';
  logo: string = "assets/img/logo.png";
  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
