import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobsDialogueComponent } from './jobs-dialogue/jobs-dialogue.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(public dialog:MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(JobsDialogueComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
 
    });
  }
}
