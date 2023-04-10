import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  constructor(private http:HttpClient) { }


  public getAllCafeteriaList(){
    return this.http.get(`${baseUrl}/workEasy/getAllCafes`);
  }
  public getStalls(id:any){
    return this.http.get(`${baseUrl}/workEasy/getStallsByCafeteria/${id}`)
  }
}
