import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public name
  public password
  public email
  public phone
  public date 
  public access 
  public api
  
  constructor(private service : ApiHttpService,private route : Router,private http : HttpClient) { }
  success
  ngOnInit(): void {
  }
  //for signup
  submit(){
    let postData = {
      name : this.name,
      email : this.email,
      mobile : this.phone,
      password : this.password,
      dateOfBirth : this.date,
      access : this.access
    }
    this.http.post("http://localhost:3000/api/auth/register", postData)
      .subscribe(data=>{
                this.api = data as string[]
                console.log(data)
                localStorage.setItem('token',this.api.token)
              } ,
        (error) => console.log(error)
      )
      if(this.api){
        this.success = true;
      }
      this.route.navigate(['./main.signup']);
  }
}
