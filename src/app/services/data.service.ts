import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

url = "http://localhost:9090/api/server"
url1 = "http://localhost1:9190/api1/server1"

  constructor(private http: HttpClient) {
    console.log("Servicio");
   }

  getData(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this.url, {headers:header})
  }

  getData1(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this.url1, {headers:header})
  }

}
