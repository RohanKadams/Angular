import { loginsucessfullAction } from './../actions/login-actions';
import { loginsate, state } from './../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServiceService } from '../service.service';
import { loginstartAction } from '../actions/login-actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
logedIn:boolean=false;
  constructor(public router:Router,private service:ServiceService,private store:Store<state>) { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    var data={role:"new",status:"new"};
    this.store.dispatch(new loginstartAction(data));
    this.store.dispatch(new loginsucessfullAction({data}));
    this.service.logedIn = true;
    this.logedIn = true;
   this.router.navigate(["home"]);
  }
}

export interface logindetails{role:String;status:string};
