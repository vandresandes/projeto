import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataPgeService } from '../data-pge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;
  repository: Object;

  constructor(private data: DataService, private dataPge: DataPgeService) { }

  ngOnInit() {}
 }
