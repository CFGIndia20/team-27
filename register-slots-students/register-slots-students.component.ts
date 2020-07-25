import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RegisterSlotsStudentsDataSource, RegisterSlotsStudentsItem } from './register-slots-students-datasource';

@Component({
  selector: 'app-register-slots-students',
  templateUrl: './register-slots-students.component.html',
  styleUrls: ['./register-slots-students.component.css']
})
export class RegisterSlotsStudentsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<RegisterSlotsStudentsItem>;
  dataSource: RegisterSlotsStudentsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','register'];

  ngOnInit() {
    this.dataSource = new RegisterSlotsStudentsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
