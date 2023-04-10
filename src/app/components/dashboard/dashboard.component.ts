import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/employee';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public employees: Employee[] = [];
  public editEmployee: Employee | undefined;
  public deleteEmployee: Employee | undefined;
  public member={
    //all the field should be match with the database.
    employeeId:90,
    profilePic:'na',
    dateOfJoining:'',
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    designation:'',
    roles:[],
    managerId:[]
  }

  user:any;

  constructor(private userService:UserService,private loginService:LoginService,private snack: MatSnackBar) { }



  ngOnInit(): void {
    this.userService.role().subscribe((data:any)=>{
      this.member.roles=data;
    })
    this.user=this.loginService.getUser();
    console.log(this.user.principal.employee.employeeId);
    this.userService.refreshNeeded$.subscribe(()  =>
    {
      this.getEmployees();

    });
    
    this.getEmployees();

  }
  public getEmployees(): void {
    this.userService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );
  }

  public onUpdateEmloyee(employee: Employee): void {
    this.userService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        Swal.fire('Success','Details updated','success');
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        console.log(employee)
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(employeeId:number){
    console.log(this.deleteEmployee!.employeeId)
     this.userService.deleteEmployee(employeeId).subscribe(
       (response: void) => {
         console.log(response);
         Swal.fire('Success','Deleted','success');

         this.getEmployees();
       },
       (error: HttpErrorResponse) => {
        // alert(error.message);
      }
     );
  }



  public onOpenModal(employee: Employee, mode: string){
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      
      this.editEmployee = employee;
      
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      console.log(this.deleteEmployee = employee)
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container!.append(button);
    button.click();
  }


}
