import { AfterViewInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-batch',
  templateUrl: './register-batch.component.html',
  styleUrls: ['./register-batch.component.css']
})
export class RegisterBatchComponent implements AfterViewInit,OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public api
  displayedColumns = ['id', 'name','starttime','register'];
  constructor(private http : HttpClient) { }
  
  public ngOnInit(): void {
    this.http.get("http://localhost:3000/api/slots")
    .subscribe(data=>{
                    console.log(data);
                    this.api = data as string[];
                    this.api.slots.sort(function(a,b){
                      return a.startTime < b.startTime ? -1 :a.startTime > b.startTime ? 1 : 0;
                    });;
            } ,
      (error) => console.log(error)
    )
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
  submit(_id){
    let postData = {
      slotId : _id 
    }
    this.http.post("http://localhost:3000/api/slots/select",postData)
    .subscribe(data=>{
                    console.log(data);
            } ,
      (error) => console.log(error)
    )
  }
}
