import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-batches',
  templateUrl: './teacher-batches.component.html',
  styleUrls: ['./teacher-batches.component.css']
})
export class TeacherBatchesComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
