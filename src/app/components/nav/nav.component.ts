import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title: string;
  logo: string = "assets/img/logo.png";

  constructor() { }

  ngOnInit() {
  }

}
