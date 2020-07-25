import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef  } from '@angular/core';
import {FormControl,FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  public skillList: string[] = ['Marathi', 'English', 'Hindi'];
  public skill = new FormControl();
  public company : String
  public description : String
  public salary : String
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(){

  }
}
