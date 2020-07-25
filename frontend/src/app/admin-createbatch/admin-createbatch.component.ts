import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-admin-createbatch',
  templateUrl: './admin-createbatch.component.html',
  styleUrls: ['./admin-createbatch.component.css']
})
export class AdminCreatebatchComponent implements OnInit {
  public date : Date
  public time : Time 
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    
  }
}
