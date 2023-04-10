import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminResourceManagmentService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$()
  {
     return this._refreshNeeded$;
  }
  public noOfEmployeeAttendingWFO(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/noOfEmployeesAttendingOnDate/${data}`);

  }
  public EmployeesAttendingWFO(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/employeesAttendingOnDate/${data}`);

  }

  public deskBookings(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/deskBookings/${data}`);

  }

  public conferenceRoomBookingCount(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/conferenceRoomBookingCount/${data}`);

  }

  public conferenceRoomBooking(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/conferenceRoomBooking/${data}`);

  }
  public bookParkingSlotsCount(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/bookParkingSlotsCount/${data}`);


  }


  public bookDesksCount(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/bookDesksCount/${data}`);

  }

  public ParkingSlotBookings(data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/ParkingSlotBookings/${data}`);

  }

  //cafe admin resource managment

  public AllCafeList()
  {
    return this.http.get(`${baseUrl}/workEasy/getAllCafes`);
  }

  public Allstalls()
  {
    return this.http.get(`${baseUrl}/workEasy/getAllStalls`);
  }


  public AddCafe(cafe:any)
  {
    return this.http.post(`${baseUrl}/workEasy/addCafeteria`,cafe);
  }

  public AddStll(stall:any)
  {
    return this.http.post(`${baseUrl}/workEasy/addStall`,stall);
  }


  public changeStatusOfCafeToClose(cafeId:number,cafe:any)
  {
   return this.http.put(`${baseUrl}/workEasy/changeStatusOfCafeToClose/${cafeId}`,cafe)
   .pipe(tap(() =>
   {
     this._refreshNeeded$.next();
   })
  );
  }


  public changeStatusOfCafeToOpen(cafeId:number,cafe:any)
  {
   return this.http.put(`${baseUrl}/workEasy/changeStatusOfCafeToOpen/${cafeId}`,cafe)
   .pipe(tap(() =>
   {
     this._refreshNeeded$.next();
   })
  );
  }


  public changeStatusOfStallToOpen(stallId:number,stall:any)
  {
   return this.http.put(`${baseUrl}/workEasy/changeStatusOfStallToOpen/${stallId}`,stall)
   .pipe(tap(() =>
   {
     this._refreshNeeded$.next();
   })
  );
  }


  public changeStatusOfStallToClose(stallId:number,stall:any)
  {
   return this.http.put(`${baseUrl}/workEasy/changeStatusOfStallToClose/${stallId}`,stall)
   .pipe(tap(() =>
   {
     this._refreshNeeded$.next();
   })
  );
  }

  public getBookedSlotsOfEmployee(employeeId:number)
  {
    return this.http.get(`${baseUrl}/workEasy/getBookedSlotsOfEmployee/${employeeId}`);
  }

  public getBookedDeskOfEmployeeFromCurrentDate(employeeId:number)
  {
    return this.http.get(`${baseUrl}/workEasy/getBookedDeskOfEmployeeFromCurrentDate/${employeeId}`);
  }

  public getliveroom()
  {
    return this.http.get(`${baseUrl}/workEasy/RoomsLiveTrack`);
  }
  public meetdetail(id:any)
  {
    return this.http.get(`${baseUrl}/workEasy/LiveRoomDetails/${id}`);
  }
  public parkdetail(id:any)
  {
    return this.http.get(`${baseUrl}/workEasy/ParkingSLotLiveTrack/${id}`);
  }
  public parkdetaillist(id:any)
  {
    return this.http.get(`${baseUrl}/workEasy/liveParkingBookingDetails/${id}`);
  }

  public getliveDesk(floorId:number)
  {
    return this.http.get(`${baseUrl}/workEasy/DesksLiveTrack/${floorId}`);
  }

  public deskdetail(id:any)
  {
    return this.http.get(`${baseUrl}/workEasy/liveDeskBookingDetails/${id}`);
  }





  


   
}
