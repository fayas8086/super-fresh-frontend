import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    'fayasjabbar@gmail.com':{username:'fayas',password:1001,email:'fayasjabbar@gmail.com'}
  }

  constructor() { }
}
