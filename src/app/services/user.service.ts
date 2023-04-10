

import { Meeting } from './meeting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject, tap } from 'rxjs';
import { Employee } from './employee';
import baseUrl from './helper';
import { Time } from '@angular/common';
import { Request } from './Request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$()
  {
     return this._refreshNeeded$;
  }
  public role(){
    return this.http.get(`${baseUrl}/workEasy/getAllRoles`);
  }
  public allManager(){
    return this.http.get(`${baseUrl}/workEasy/listOfManagers`);
  }
  public adduser(user:any){
    return this.http.post(`${baseUrl}/WorkEasy/addEmployee/`,user)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }

  public getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${baseUrl}/WorkEasy/getAllEmployees`);
}
   public getAllRequestToManager(managerId:number)
   {
    return this.http.get(`${baseUrl}/WorkEasy/getAllRequestsToManager/${managerId}`);

   }

  public getmember(managerId:number):Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${baseUrl}/WorkEasy/getEmployeesByManagerId/${managerId}`);
  }

  public updateEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(`${baseUrl}/WorkEasy/updateEmployeeDetails`,employee);
  }

  public deleteEmployee(employeeId:number):Observable<void>
  {
    return this.http.delete<void>(`${baseUrl}/WorkEasy/deleteEmployee/${employeeId}`);
  }
  public addmeet(meet:any){
    return this.http.post(`${baseUrl}/woekesy/postMeeting`,meet)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public getroom()
  {
    return this.http.get(`${baseUrl}/workeasy/getAllRooms`);
  }
  public getmeeting(empId:number):Observable<Meeting[]>
  {
    return this.http.get<Meeting[]>(`${baseUrl}/workesy/getAllMeetingByEmployeeId/${empId}`);
  }
  public getavailablerooms(date:string,start:string,end:string)
  {
    return this.http.get(`${baseUrl}/workeasy/getAllAvailableRoomsForThatTimeSlot/${date}/${start}/${end}`);
  }

  public getavailabledesk(floorno:string,date:string,start:string,end:string)
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAvailableDesks/${floorno}/${date}/${start}/${end}`);
  }

  public getAllAvailableParkingSlot(areaNo:string,date:string,start:string,end:string)
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAvailableParkingSlots/${areaNo}/${date}/${start}/${end}`);
  }
  
  public getAllDeskBooked(employeeId:number,data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/getBookedDeskOfEmployee/${employeeId}/${data}`)

  }

  public getParkingBookedDetails(employeeId:number,data:string)
  {
    return this.http.get(`${baseUrl}/workEasy/getBookedParkingSlotOfEmployee/${employeeId}/${data}`);
  }




  public getAllParkingArea()
  {
    return this.http.get(`${baseUrl}/workEasy/getAllAreas`);

  }

  
  public getallfloor()
  {
    return this.http.get(`${baseUrl}/workEasy/getAllFloors`);
  }


  public addwfm(ok:any){
    return this.http.post(`${baseUrl}/WorkEasy/requestWFH`,ok)
                    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
                    );
  }

  

  public bookDesk(ok:any)
  {
    return this.http.post(`${baseUrl}/workEasy/BookDesk`,ok)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
                    );
  }

  public bookparkingslot(ok:any)
  {
    return this.http.post(`${baseUrl}/workEasy/BookParkingSlot`,ok)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
                    );
  }

  public assignStatus(ok:any)
  {
    return this.http.post(`${baseUrl}/workEasy/createSchedule`,ok);
    
  }


  public getAllRequest()
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAllRequests`)
  }

  public approveRequest(requestId:number,request:Request):Observable<Request>
  {
    return this.http.put<Request>(`${baseUrl}/WorkEasy/acceptRequest/${requestId}`,requestId);
  }

  public rejectRequest(requestId:number,request:Request):Observable<Request>
  {
    return this.http.put<Request>(`${baseUrl}/WorkEasy/rejectRequest/${requestId}`,requestId);
  }



  public getAllRequestByEmployeeid(employeeId:number):Observable<Request[]>
  {
    return this.http.get<Request[]>(`${baseUrl}/WorkEasy/getAllRequestsToEmployee/${employeeId}`);
  }


  public wfo(empId:string,date:string){
    return this.http.get(`${baseUrl}/workEasy/getEmpStatus/${empId}/${date}`);
  }

  public getmeetid(id:number){
    return this.http.get(`${baseUrl}/workesy/getMeetingById/${id}`);
  }

  public putmeet(meet:any){
    return this.http.put(`${baseUrl}/workeasy/editmeeting`,meet)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public dele(mid:number)
  {
    return this.http.delete(`${baseUrl}/workeasy/deleteMeeting/${mid}`)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public ext(id:number,time:string){
    return this.http.put(`${baseUrl}/workEasy/ExtendBooking/${id}/${time}`,id)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
                    );
    
    
  }
  public extp(id:number,time:string){
    return this.http.put(`${baseUrl}/workEasy/Parking/ExtendBooking/${id}/${time}`,id)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
                    );
  }
  public status(id:number,date:String){
    return this.http.get(`${baseUrl}/workEasy/TeamMatesStatus/${id}/${date}`)
  }
  public ent(empId:string,date:string){
    return this.http.get(`${baseUrl}/workEasy/upcomingEvents/${empId}/${date}`);
  }
  public delrequest(mid:number)
  {
    return this.http.delete(`${baseUrl}/WorkEasy/cancelRequest/${mid}`)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public delparking(mid:number,body:any)
  {
    return this.http.put(`${baseUrl}/workEasy/CancelParkingSlot/${mid}`,body)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public delbooking(mid:number,body:any)
  {
    return this.http.put(`${baseUrl}/workEasy/CancelDesk/${mid}`,body)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );

  }
  public delroom(mid:number,user:any)
  {
    return this.http.put(`${baseUrl}/workEasy/deleteRoom/${mid}`,user)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );
  
  }

  public aprovedall(employeeId:number)
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAllAcceptedRequests/${employeeId}`); 
  }

  public pendingall(employeeId:number)
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAllPendingRequests/${employeeId}`); 
  }

  public rejectedall(employeeId:number)
  {
    return this.http.get(`${baseUrl}/WorkEasy/getAllRejectedRequests/${employeeId}`); 
  }

  public approvedM(id:number){
    return this.http.get(`${baseUrl}/WorkEasy/getAllAcceptedRequest/${id}`);
  }
  public pendingM(id:number){
    return this.http.get(`${baseUrl}/WorkEasy/getAllPendingRequestsForManager/${id}`)
    .pipe(tap(() =>
                      {
                        this._refreshNeeded$.next();
                      })
      );
  }
  public rejectM(id:number){
    return this.http.get(`${baseUrl}/WorkEasy/getAllRejectedRequest/${id}`);
  }
  

}
