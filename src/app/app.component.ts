import { Component, DoCheck } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'MyFirstApp';
  logedIn:boolean=false;
  constructor(public service:ServiceService){  }
  ngDoCheck(): void {
    this.logedIn=this.service.logedIn;
  }
  
}
