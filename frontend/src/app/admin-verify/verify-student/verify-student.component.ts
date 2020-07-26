import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-student',
  templateUrl: './verify-student.component.html',
  styleUrls: ['./verify-student.component.css']
})
export class VerifyStudentComponent implements OnInit {

  constructor(private http : HttpClient) { }
  api
  user_id = localStorage.getItem("user_id")
  ngOnInit(): void {
    let postData ={
        '_id' : this.user_id,
    }
    this.http.post("http://localhost:3000/api/user/profile",postData)
    .subscribe(data=>{
                    console.log(data);
                    this.api = data as string[];
            } ,
      (error) => console.log(error)
    )
  }

}
