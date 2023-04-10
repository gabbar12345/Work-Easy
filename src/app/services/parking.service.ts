import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http:HttpClient) { }


  public getAllParkingSlot()
  {
    return this.http.get(`${baseUrl}/workEasy/getAllParkingSlots`);
  }
}
