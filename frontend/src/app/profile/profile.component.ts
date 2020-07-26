import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef  } from '@angular/core';
import {FormControl,FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public skillList: string[] = ['Marathi', 'English', 'Hindi'];
  public skill = new FormControl();
  public disable  = true;
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = []; 
 constructor( private formBuilder : FormBuilder) { }
 uploadForm : FormGroup

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile : ['']
    })
  }
  onFileSelect(event){
    const file = event.target.files[0];
    this.uploadForm.get('profile').setValue(file);
  }
  submit(){

  }
  click(){
    this.disable = false;
  }
}
