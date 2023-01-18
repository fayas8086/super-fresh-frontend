import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit{
 uname=""; 
  email="";
  pswd="";
  constructor(private ds:DataService){}

  ngOnInit(): void {
  
  }
  register(){
   var uname=this.uname;
   var email=this.email;
   var pswd=this.pswd;

   var userDetails=this.ds.userDetails;
  }

}
