import { Router } from '@angular/router';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }
  onEdite(){
   let dialogref = this.dialog.open(ProfileComponent,{width:'250px',data:{custom:""}});
   dialogref.afterClosed().subscribe(result=>{
    console.log("Dialog is closed",result)
   })
  }
  onBack(){
      this.router.navigate([""]);
  }
}
