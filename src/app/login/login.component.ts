import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  
  email="";
  pswd="";

  userDetails:any={
    'fayasjabbar@gmail.com':{username:'fayas',password:1001,email:'fayasjabbar@gmail.com'}
    
  }
  constructor(private router:Router){}

  ngOnInit(): void {
   
  }
  emailChange(event:any)
  {
    this.email=(event.target.value);
    console.log(this.email);
    
  }
  pswdChange(event:any)
  {
    this.pswd=(event.target.value)
    console.log(this.pswd);
    
  }
login(){
  var email=this.email;
  var pswd=this.pswd;
  var userDetails=this.userDetails;
  if(email in userDetails)
  {
    if(pswd==userDetails[email]['password'])
    {
      alert("login success");
      this.router.navigateByUrl('dashbord');
    }
    else{
      alert("incorrect email or password");
    }
  }
  else{
    alert('user not found');
  }
}
// login(a:any,p:any){
//   var email=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;
//   if(email in userDetails)
//   {
//     if(pswd==userDetails[email]['password'])
//     {
//       alert("login success");
//     }
//     else{
//       alert("incorrect email or password");
//     }
//   }
//   else{
//     alert('user not found');
//   }
// }
}
