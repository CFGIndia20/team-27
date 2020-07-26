import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from '../services/api-http.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(private service : ApiHttpService,private route : Router,private http : HttpClient) { }
  api;
  ngOnInit(): void {
  }
  submit(){
    //for login
    let postData ={
      email : this.email,
      password : this.password
    }
    this.http.post("http://localhost:3000/api/auth/login", postData)
    .subscribe(data=>{
                    console.log(data);
                    this.api = data as string[];
                    localStorage.setItem('token',this.api.token)
                    localStorage.setItem('access',this.api.access)
            } ,
      (error) => console.log(error)
    )
    this.route.navigate(['./home']);
  }
  
}
