import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
 

@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.css']
})
export class AdminVerifyComponent implements OnInit {
 
  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyStudentComponent, {
      height: '600px',
      width :'700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
 
    });
  }
  ngOnInit(): void {
  }

}
