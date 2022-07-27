import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
logedIn:boolean=false;
  constructor(public router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    this.service.logedIn = true;
    this.logedIn = true;
   this.router.navigate(["home"]);
  }
}
