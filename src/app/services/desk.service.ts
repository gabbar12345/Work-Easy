import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http:HttpClient) { }


  public getAllDesks(){
    return this.http.get(`${baseUrl}/workEasy/getAllDesks`);
  }

}
