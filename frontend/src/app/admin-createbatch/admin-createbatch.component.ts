import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ViewChild, ElementRef  } from '@angular/core';
import {FormControl,FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-createbatch',
  templateUrl: './admin-createbatch.component.html',
  styleUrls: ['./admin-createbatch.component.css']
})
export class AdminCreatebatchComponent implements OnInit {
  public startDate : Date
  public endDate : Date
  public endTime : Number
  public startTime : Number 
  
  public timeslot: string[] = ['700','800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100'];
  value: number;
  viewValue: string;
  public slot = new FormControl();
  api
  constructor(private http : HttpClient,private route : Router) { }

  ngOnInit(): void {
  }
  submit(){
    let postData= {
      startTime : this.value,
      endTime : this.value+100,
      startDate : this.startDate,
      endDate : this.endDate,
    }
    this.http.post("http://localhost:3000/api/slots", postData)
    .subscribe(data=>{
                    console.log(data);
                    this.api = data as string[];
                    this.route.navigate(['./home']);
            } ,
      (error) => console.log(error)
    )
  }
}
