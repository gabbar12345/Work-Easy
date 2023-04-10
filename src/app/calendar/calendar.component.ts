import { UserService } from 'src/app/services/user.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { LoginService } from '../services/login.service';
import { Employee } from '../services/employee';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AddmemberComponent } from '../components/addmember/addmember.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { Meeting } from '../services/meeting';
import { HttpErrorResponse } from '@angular/common/http';
import { AUTO_STYLE } from '@angular/animations';
import { bindCallback } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { red } from '@material-ui/core/colors';
//mport { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/core';
//import { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/core';

//defineFullCalenderElement();
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  setSlot: number = 0;
  showSlot: boolean = false;
  modalRef?: BsModalRef;
  user: any = null;
  event1: any = [];
  rooms: any;
  event: any = [];
  select: any;
  emp: any;
  subtracttime: any;
  endt: any;
  public employees: Employee[] = [];
  meeting: any;
  editProfileForm!: FormGroup;
  meetings: any;
  public meet = {
    meetingId: 90,
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    meetLink: '',
    attendees: [],
    room: {
      capacity: 0,
      hallName: '',
      roomId: 0
    },
    agenda: '',
    organiser: []
  }
  title: any; roomid: any; url: any; roomname: any; start: any; end: any; mid: any; organiser: any; agenda: any; link: any;
  config = {

    animated: true,


  }
  
  Events: any[] = [];
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listWeek,timeGridWeek,dayGridMonth,timeGridDay'
    },
    
    initialView: 'listWeek',
    weekends: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    contentHeight: 600,
    aspectRatio: 0.2,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),

    //eventColor:'#000428',
    // rerenderDelay:0,

  };
  @ViewChild('template') template!: any;
  @ViewChild('newmeet') newmeet!: any;
  @ViewChild('editProfileModal') editProfileModal!: any;
  constructor(private login: LoginService,
    public dialog: MatDialog,
    private userService: UserService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.user = this.login.getUser();
    // this.getAllmeeting();
    this.getEmployees();
    this.select = this.user.principal.employee;
    console.log(this.event);
    // console.log(this.event1[0].title)
    // this.event.push(this.event1[0]);
    this.userService.refreshNeeded$.subscribe(() => {
      this.getAllmeeting();

    });
    this.getAllmeeting();

    this.select = this.user.principal.employee;
    console.log(this.event);
    // console.log(this.event1[0].title)
    // this.event.push(this.event1[0]);
  }
  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open(' Try again', '', {
          duration: 3000,
        });
      }
    );
  }
  public getmeetid(): void {
    console.log()
    this.userService.getmeetid(this.mid).subscribe(
      (response: any) => {

        this.meeting = response;
        this.meet.meetingId = this.meeting.meetingId;
        this.meet.title = this.meeting.title;
        this.meet.startTime = this.meeting.startTime;
        this.meet.endTime = this.meeting.endTime;
        this.meet.date = this.meeting.date;
        this.meet.meetLink = this.meeting.meetLink;
        if (this.meeting.room == null) {
          this.meet.room
        } else {
          this.meet.room = this.meeting.room;
        }
        this.meet.attendees = this.meeting.attendees;
        this.meet.agenda = this.meeting.agenda;
        this.meet.organiser = this.meeting.organiser;
        console.log(this.meet.meetingId);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
        this.snack.open('Try again', '', {
          duration: 3000,
        });
      }
    );
  }
  public getroom(value: any): void {
    this.showSlot = true;

    console.log(this.meet.date, this.meet.startTime, this.meet.endTime);
    this.userService.getavailablerooms(this.meet.date, this.meet.startTime, this.meet.endTime).subscribe(
      //yeah wala hm hata k hm all room wala lagaye the q ki mere me kaam ni kar ra tha tum change kar lena
      //this.userService.getroom().subscribe(
      (response: any) => {
        this.rooms = response;
        console.log(this.rooms);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
        console.log('Error !');
        console.log(error);
        // this.snack.open('Rooms not available !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
  }
  public getmember(): void {
    this.userService.getmember(this.user.principal.employee.employeeId).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        //alert(error.message);
        console.log('Error !');
        console.log(error);
        this.snack.open('Something went wrong !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }

  public getAllmeeting(): void {
    this.userService.getmeeting(this.user.principal.employee.employeeId).subscribe(

      (response: any) => {
        this.event1 = response;
        //this.event=response;
        console.log(response)

        for (let i = 0; i < this.event1.length; i++) {
          this.event.push({
            title: this.event1[i].title, date: this.event1[i].date, room: this.event1[i].room, id: this.event1[i].meetingId, link: this.event1[i].meetLink, organiser: this.event1[i].organiser,
            agenda: this.event1[i].agenda,
            start: this.event1[i].date.replace(/T.*$/, '') + `T${this.event1[i].startTime}`,
            end: this.event1[i].date.replace(/T.*$/, '') + `T${this.event1[i].endTime}`
          })
        }
        this.calendarOptions.events = this.event;
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );

  }


  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    this.calendarOptions = {
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends
    }
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event1');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: '1',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }
  handleEventClick(arg: any) {
    // if (confirm(`Are you sure you want to delete the event1 '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove();
    // }
    console.log(arg,"yha h");
    this.title = arg.event._def.title;
    if (arg.event._def.extendedProps.room === null) {
      this.roomname = "No Room"

    } else {
      this.roomid = arg.event._def.extendedProps.room.roomId;
      this.roomname = arg.event._def.extendedProps.room.hallName;
    }
    this.url = arg.event._def.url;
    //this.subtracttime = new Date(arg.event._instance.range.start.setHours(arg.event._instance.range.start.getHours() - 5));
    this.start =(arg.event._instance.range.start);
    this.end =  arg.event._instance.range.end;
   // this.end = new Date(this.endt.setMinutes(arg.event._instance.range.end.getMinutes() - 30));

    this.mid = arg.event._def.publicId;
    this.organiser = arg.event._def.extendedProps.organiser;
    this.agenda = arg.event._def.extendedProps.agenda;
    this.link = arg.event._def.extendedProps.link;
    console.log(arg);
    this.modalRef = this.modalService.show(this.template, {
      animated: true,
      class: 'modal-dialog-centered',
    })
    // arg.info.jsEvent.preventDefault();

  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
  newMeet() {
    this.modalRef = this.modalService.show(this.newmeet, {

      animated: true,
      class: 'modal-xl',

    });

  }
  openModal() {
    this.modalRef = this.modalService.show(this.editProfileModal, {

      animated: true,
      class: 'modal-xl',


    });
    this.getmeetid();
  }
  submit() {
    console.log(this.meet);
    this.userService.putmeet(this.meet).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'meeting updated', 'success');
        window.location.reload();


      },
      (error :HttpErrorResponse) => {

        //console.log(error);
        // alert('something went wrong');
        console.log('Error !');
        console.log(error);
        // this.snack.open('Something went wrong !! Try again', '', {
        //   duration: 3000,
        // });

        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned a custom error.
          // Handle the error based on the error code and message.
          switch (error.status) {
            case 400:
             // console.error('Item not found');
             this.snack.open('Meeting is already completed', '', {
              duration: 5000,
            });
              break;
            case 401:
              this.snack.open('Meeting is already completed', '', {
                duration: 5000,
              });
              break;
  
            case 500:
              this.snack.open('Server Error', '', {
                duration: 5000,
              });
              break;
            default:
              console.error(error.error.message);
              break;
          }
        }
  

      }
    )

  }

  del() {

    this.userService.dele(this.mid).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'meeting deleted', 'success');
        window.location.reload();

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );

    window.location.reload();

  }
  delroom() {
    this.userService.delroom(this.mid, this.rooms).subscribe(
      (data) => {
        console.log('yes',data);
        Swal.fire('Success', 'meeting room deleted', 'success');
        this.getmeetid();
        window.location.reload();

      },
      (error: HttpErrorResponse) => 
      {
        console.log('error;,',error);
        this.getmeetid();
        Swal.fire('Success', 'meeting room deleted', 'success');
        window.location.reload();
      }
    );

  }
  // new meeting pop up starts
  newmeeting() {

    this.meet.organiser = this.select;
    this.userService.addmeet(this.meet).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'meeting created', 'success');
        window.location.reload();

      },
      (error) => {
        //console.log(error);
        // alert('something went wrong');
        console.log('Error !');
        console.log(error);
        this.snack.open('Something went wrong !! Try again', '', {
          duration: 3000,
        });

      }
    )

    window.location.reload();
  }
  // new meeting pop up ends


  setNewVal(e: any) {

    this.meet.room.capacity = e.capacity;
    this.meet.room.hallName = e.hallName;
    this.meet.room.roomId = e.roomId;

    this.setSlot = e.roomId;
    // this.setSlot=e.hallName;

    console.log(this.meet.room.capacity)
  }
  // validation new meeting form

}
