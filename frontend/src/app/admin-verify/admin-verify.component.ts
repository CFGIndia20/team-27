import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.css']
})
export class AdminVerifyComponent implements OnInit {
  api
  constructor(public dialog:MatDialog,private http : HttpClient) { }
  openDialog(_id): void {
    localStorage.setItem("user_id",_id);
    const dialogRef = this.dialog.open(VerifyStudentComponent, {
      height: '600px',
      width :'700px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
 
    });
  }
  ngOnInit(): void {
   this.http.get("http://localhost:3000/api/user/verify")
    .subscribe(data=>{
                    console.log(data)
                    this.api = data as string[];
                    console.log(this.api.users);
            } ,
      (error) => console.log(error)
    )
  }

}
