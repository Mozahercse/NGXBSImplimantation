import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CompPagenation',
  templateUrl: './CompPagenation.component.html',
  styleUrls: ['./CompPagenation.component.css']
})
export class CompPagenationComponent implements OnInit {

  currentPage = 4;
  smallnumPages = 0;
  constructor() { }

  ngOnInit() {
  }

}
