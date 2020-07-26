import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  constructor(private http  : HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/auth/lo")
    .subscribe(data=>{
                    console.log(data);
                    
            } ,
      (error) => console.log(error)
    )
  }

}
