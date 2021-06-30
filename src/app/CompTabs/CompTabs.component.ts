import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-CompTabs',
  templateUrl: './CompTabs.component.html',
  styleUrls: ['./CompTabs.component.css']
})
export class CompTabsComponent implements OnInit {

  @ViewChild('staticTabs', { static: false })
  staticTabs!: TabsetComponent;


  constructor() { }

  ngOnInit() {
  }

  disableEnable() {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }

}
