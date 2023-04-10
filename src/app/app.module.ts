import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from './services/login.service';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { EmpSidenavComponent } from './employee/emp-sidenav/emp-sidenav.component';
import { ManSidenavComponent } from './manager/man-sidenav/man-sidenav.component';
import { AllmemberComponent } from './manager/allmember/allmember.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { NewMeetingComponent } from './calendar/new-meeting/new-meeting.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { WfmComponent } from './wfm/wfm.component';
import { RequestComponent } from './request/request.component';
import { AssignstatusComponent } from './assignstatus/assignstatus.component';
import { AssignformComponent } from './assignstatus/assignform/assignform.component';
import { WfmformComponent } from './wfm/wfmform/wfmform.component';
import { EmpdashboardComponent } from './employee/empdashboard/empdashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DeskComponent } from './desk/desk.component';
import { ParkingComponent } from './parking/parking.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { ManageDeskComponent } from './components/manage-desk/manage-desk.component';
import { ManageDeskFloorComponent } from './components/manage-desk/manage-desk-floor/manage-desk-floor.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManagebookdeskComponent } from './components/manage-desk/managebookdesk/managebookdesk.component';
import { ManageparkingComponent } from './components/manageparking/manageparking.component';
import { ManageparkingareaComponent } from './components/manageparking/manageparkingarea/manageparkingarea.component';
import { ManageparkingslotComponent } from './components/manageparking/manageparkingslot/manageparkingslot.component';
import { ManagedesklistComponent } from './components/manage-desk/managedesklist/managedesklist.component';
import { ParkingbookinglistComponent } from './components/manageparking/parkingbookinglist/parkingbookinglist.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { CafeteriaComponent } from './cafeteria/cafeteria.component';
import { StallsComponent } from './stalls/stalls.component';
import { ManageRoomComponent } from './components/manage-room/manage-room.component';
import { RoommanagmentComponent } from './components/manage-room/roommanagment/roommanagment.component';
import { RoomlistComponent } from './components/manage-room/roomlist/roomlist.component';
import { CafesidenavComponent } from './cafeAdmin/cafesidenav/cafesidenav.component';
import { AllcafeComponent } from './cafeAdmin/allcafe/allcafe.component';
import { AllstallsComponent } from './cafeAdmin/allstalls/allstalls.component';
import { ManageCafeComponent } from './cafeAdmin/manage-cafe/manage-cafe.component';
import { AddcafeComponent } from './cafeAdmin/manage-cafe/addcafe/addcafe.component';
import { AddstallsComponent } from './cafeAdmin/manage-cafe/addstalls/addstalls.component';
import { DeskbookingdetailsComponent } from './deskbookingdetails/deskbookingdetails.component';
import { ParkbookingdetailsComponent } from './parkbookingdetails/parkbookingdetails.component';
import { LivetrackComponent } from './components/manage-room/livetrack/livetrack.component';
import { ParkingliveComponent } from './components/manageparking/parkinglive/parkinglive.component';
import { LivedeskComponent } from './components/manage-desk/livedesk/livedesk.component';
import { WfodaysComponent } from './wfodays/wfodays.component';

//import interactionPlugin from '@fullcalendar/interaction';
// import { NgxPaginationModule } from 'ngx-pagination';



FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  
])
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    AddmemberComponent,
    LoginComponent,
    EmpSidenavComponent,
    ManSidenavComponent,
    AllmemberComponent,
    CalendarComponent,
    NewMeetingComponent,
    WfmComponent,
    RequestComponent,
    AssignstatusComponent,
    AssignformComponent,
    WfmformComponent,
    EmpdashboardComponent,
    DeskComponent,
    ParkingComponent,
    ManageDeskComponent,
    ManageDeskFloorComponent,
    AdminDashboardComponent,
    ManagebookdeskComponent,
    ManageparkingComponent,
    ManageparkingareaComponent,
    ManageparkingslotComponent,
    ManagedesklistComponent,
    ParkingbookinglistComponent,
    EmployeedetailsComponent,
    CafeteriaComponent,
    StallsComponent,
    ManageRoomComponent,
    RoommanagmentComponent,
    RoomlistComponent,
    CafesidenavComponent,
    AllcafeComponent,
    AllstallsComponent,
    ManageCafeComponent,
    AddcafeComponent,
    AddstallsComponent,
    DeskbookingdetailsComponent,
    ParkbookingdetailsComponent,
    LivetrackComponent,
    ParkingliveComponent,
    LivedeskComponent,
    WfodaysComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule ,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    // NgxPaginationModule,
    NgxMatSelectSearchModule,
    NgSelectModule,
    NgxUiLoaderModule,
    
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    ModalModule.forRoot(),
     FullCalendarModule
    
  ],
  providers: [authInterceptorProviders,LoginService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents:[NewMeetingComponent]
})
export class AppModule { }
