import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  URI:string = '';
  constructor(private httpclient: HttpClient) { 
    this.URI=`https://api.openweathermap.org/data/2.5/weather?APPID=2ebb8d634e6ad8b6841eb487bcd37103&id=`
  }
  
  getclima(codigo:string){
    return this.httpclient.get(`${this.URI}${codigo}`);
  }
}
