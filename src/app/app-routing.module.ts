import { StallsComponent } from './stalls/stalls.component';
import { AllmemberComponent } from './manager/allmember/allmember.component';
import { ManagerGuard } from './services/manager.guard';
import { ManSidenavComponent } from './manager/man-sidenav/man-sidenav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './services/admin.guard';
import { EmpSidenavComponent } from './employee/emp-sidenav/emp-sidenav.component';
import { NormalGuard } from './services/normal.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { WfmComponent } from './wfm/wfm.component';
import { RequestComponent } from './request/request.component';
import { AssignstatusComponent } from './assignstatus/assignstatus.component';
import { EmpdashboardComponent } from './employee/empdashboard/empdashboard.component';
import { DeskComponent } from './desk/desk.component';
import { ParkingComponent } from './parking/parking.component';
import { ManageDeskComponent } from './components/manage-desk/manage-desk.component';
import { ManageDeskFloorComponent } from './components/manage-desk/manage-desk-floor/manage-desk-floor.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { Children } from 'preact/compat';
import { ManageparkingComponent } from './components/manageparking/manageparking.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { CafeteriaComponent } from './cafeteria/cafeteria.component';
import { ManageRoomComponent } from './components/manage-room/manage-room.component';
import { CafeteriaAdminGuard } from './services/cafeteria-admin.guard';
import { CafesidenavComponent } from './cafeAdmin/cafesidenav/cafesidenav.component';
import { AllcafeComponent } from './cafeAdmin/allcafe/allcafe.component';
import { AllstallsComponent } from './cafeAdmin/allstalls/allstalls.component';
import { ManageCafeComponent } from './cafeAdmin/manage-cafe/manage-cafe.component';
import { DeskbookingdetailsComponent } from './deskbookingdetails/deskbookingdetails.component';
import { ParkbookingdetailsComponent } from './parkbookingdetails/parkbookingdetails.component';
import { WfodaysComponent } from './wfodays/wfodays.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  
  
  {path: 'user-dashboard', component: EmpSidenavComponent,
  canActivate: [NormalGuard],
  
  children: 
  [
    // { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'add', component:AddmemberComponent},
    {path:'calendar',component:CalendarComponent},
    {path: 'wfm' ,component:WfmComponent},
    {path:'desk',component:DeskComponent},
    {path:'parking',component:ParkingComponent},
    {path:'', component:EmpdashboardComponent},
    {path:'empd', component:EmpdashboardComponent},
    {path:'cafeteria',component:CafeteriaComponent},
    {path:'stall',component:StallsComponent},
    {path:'deskdetails',component:DeskbookingdetailsComponent},
    {path:'parkdetails',component:ParkbookingdetailsComponent},
    {path:'wfoDays',component:WfodaysComponent},

    ]
  },

  {path: 'manager-dashboard', component: ManSidenavComponent,
  canActivate: [ManagerGuard],
  
  children: 
  [
    { path: '', component: EmpdashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'view', component: AllmemberComponent },
    {path:'add', component:AddmemberComponent},
    {path:'calendar',component:CalendarComponent},
    {path:'request',component:RequestComponent},
    {path: 'wfm' ,component:WfmComponent},
    {path:'assignstatus',component:AssignstatusComponent},
    {path:'parking',component:ParkingComponent},
    {path:'desk',component:DeskComponent},
    {path:'managerdashboard', component:EmpdashboardComponent},
    {path:'cafeteria',component:CafeteriaComponent},
    {path:'stall',component:StallsComponent},
    {path:'deskdetails',component:DeskbookingdetailsComponent},
    {path:'parkdetails',component:ParkbookingdetailsComponent},
    {path:'wfoDays',component:WfodaysComponent},




    
    ]
  },
  
  // { path: 'dashboard', component: DashboardComponent },
  // {path:'add', component:AddmemberComponent},
  {
  path: 'admin', component: SidenavComponent,
  canActivate: [AdminGuard],
  
  children: 
  [
    { path: '', component: AdminDashboardComponent},
    {path:'admindashboard',component:AdminDashboardComponent,

         children:[
          // {path:'',component:AdminDashboardComponent},
       {path:'listemployee',component:EmployeedetailsComponent},
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'add', component:AddmemberComponent},
    {path:'parking',component:ParkingComponent},
    {path:'desk',component:DeskComponent},
    {path:'ManageDesk',component:ManageDeskComponent},
    {path:'calendar',component:CalendarComponent},
    {path:'ManageParking',component:ManageparkingComponent},
    {path:'EmployeeList',component:EmployeedetailsComponent},
        {path:'cafeteria',component:CafeteriaComponent},
    {path:'stall',component:StallsComponent},

    {path:'ManageRoom',component:ManageRoomComponent},
    {path:'deskdetails',component:DeskbookingdetailsComponent},
    {path:'parkdetails',component:ParkbookingdetailsComponent},


    // {path:'admin/viewParking',component:ManageparkingComponent},
    
    ]
    

  },
  {path: 'cafe-dashboard', component: CafesidenavComponent,
  canActivate: [CafeteriaAdminGuard],
  
  children: 
  [
    {path: '', component: EmpdashboardComponent},
    {path: 'home', component: HomeComponent },
    {path:'parking',component:ParkingComponent},
    {path:'allcafe',component:AllcafeComponent},
    {path:'allstall',component:AllstallsComponent},
    {path:'manageCafe',component:ManageCafeComponent},
    {path:'desk',component:DeskComponent},
    {path:'deskdetails',component:DeskbookingdetailsComponent},
    {path:'parkdetails',component:ParkbookingdetailsComponent},



    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
