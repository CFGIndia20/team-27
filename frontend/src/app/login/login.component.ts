import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email : String 
  public password : String
  public postData ={
    email : this.email,
    password : this.password
  }
  constructor(private service : ApiHttpService,private route : Router) { }

  ngOnInit(): void {
  }
  submit(){
    //for login
    let data = this.service.post(this.postData);
    //localStorage.setItem('token',data.token);
    //localStorage.setItem('name',data.name); 
    this.route.navigate(['./home']);
  }
}
