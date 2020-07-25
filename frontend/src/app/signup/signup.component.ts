import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public name : String
  public password : String
  public email : String
  public phone : Number
  public date : Date
  public access : String
  public postData = {
    name : this.name,
    email : this.email,
    mobile : this.phone,
    password : this.password,
    dateOfBirth : this.date,
    access : this.access
  }
  constructor(private service : ApiHttpService) { }

  ngOnInit(): void {
  }
  //for signup
  submit(){
    this.service.post(this.postData);
  }
}
