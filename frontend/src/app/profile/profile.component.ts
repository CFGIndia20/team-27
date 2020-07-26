import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef  } from '@angular/core';
import {FormControl,FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public skillList: string[] = ['Communication','Reasoning','Verbal','Accounts','Maths'];
  public skill = new FormControl();
  public disable  = true;
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = []; 
 constructor( private formBuilder : FormBuilder, private http : HttpClient) { }
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
    console.log("Image submit")
    const formData = new FormData();
    let postData = {
      "skills" : this.skill
    }
    formData.append('imageFile',this.uploadForm.get('profile').value);
    this.http.post<any>('http://localhost:3000/api/user/updateprofile',formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
       )
  }
  click(){
    this.disable = false;
  }
}
