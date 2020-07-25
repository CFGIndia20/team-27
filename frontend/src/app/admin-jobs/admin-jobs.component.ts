import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobComponent } from './add-job/add-job.component';
 
@Component({
  selector: 'app-admin-jobs',
  templateUrl: './admin-jobs.component.html',
  styleUrls: ['./admin-jobs.component.css']
})
export class AdminJobsComponent implements OnInit {
  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddJobComponent, {
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
