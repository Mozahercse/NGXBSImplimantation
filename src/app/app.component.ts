import { Component } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { FormControl } from '@angular/forms';
//../../lib/ngx-select/ngx-select.interfaces
import { INgxSelectOption } from '../../node_modules/ngx-select-ex/ngx-select/ngx-select.interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alerts: any[] = [{
    type: 'success',
    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
    timeout: 5000
  }];
  checkModel: { left?: boolean; middle?: boolean; right?: boolean } = { left: false, middle: true, right: false };
  radioModel = 'Middle';
  isOpen = false;
  ismeridian = true;
  mytime: Date = new Date();
  disabled = false;
  public ngxControl = new FormControl();
  selectValue:any;
  public items = [
    {id:'1',name:'Amsterdam'},
    {id:'2',name:'Bradford'},
    {id:'3',name:'Dortmund'},
    {id:'4',name:'Leeds'}
  ];

  constructor() { }

  public doSelectOptions = (options: INgxSelectOption[]) => {
    alert('asdf');
  };

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }



  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }

}
