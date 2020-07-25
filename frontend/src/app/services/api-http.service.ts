import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http : HttpClient) { }
  public post(postData){
    this.http.post("http://localhost:3000/users/login", postData)
    .subscribe(data=>{
              return data as string[];
            } ,
      (error) => console.log(error)
    )
  }  

}
