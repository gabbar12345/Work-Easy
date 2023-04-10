import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wfmform',
  templateUrl: './wfmform.component.html',
  styleUrls: ['./wfmform.component.scss']
})
export class WfmformComponent implements OnInit {

  constructor(private userService:UserService,private  loginService:LoginService,private snack: MatSnackBar) { }
  user:any;
  date=new Date().toISOString().substring(0,10);
  // roles:any
  public member={
    //all the field should be match with the database.
  //   requestId: '2',
  //   employee: 
  //   {
  //   userName: 'mani_!23',
  //   password: 'mani123',
  //   firstName: "string",
  //   lastName: "string",
  //   profilePic: "string",
  //   designation: "string",
  //   managerId: 4,
  //   dateOfJoining: "2022-11-10T05:14:43.959Z",
  //   roles: [
  //     {
  //       id: 5,
  //       name: "string"
  //     }
  //   ],
  //   employeeId: 5
  // },
  //   date: "2022-19-11",
  //   statusForDay: "WFM",
  //   requestStatus: "PENDING"
  
    requestId: 0,
    employee: {
      userName: "mani_123",
      password: "mani123",
      firstName: "manisha",
      lastName: "kumari",
      profilePic: "na",
      designation: "na",
      managerId: 4,
      dateOfJoining: "2022-11-10T06:37:38.120Z",
      roles: [
        {
          id: 2,
          name: "ROLE_EMPLOYEE"
        }
      ],
      employeeId: 5
    },
    date: `${this.date}`,
    statusForDay: "WFH",
    requestStatus: "PENDING"
  }
  
  ngOnInit(): void {
    // this.userService.role().subscribe((data:any)=>{
    //   this.member.roles=data;
    // })
    this.user=this.loginService.getUser();
    this.loginService.getCurrentUser();
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.member.employee=data.principal.employee;
      console.log(data.principal.employee)
     
    })
   // console.log(data)
  }
  add(){
   // console.log(this.member);
    this.loginService.getCurrentUser();

    this.userService.addwfm(this.member).subscribe(
      
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','Succesfully submmited','success');
        
      },
      (error)=>{
        console.log(error);
        //alert('something went wrong');
        this.snack.open(' Something went wrong!', '', {
          duration: 3000,
        });
      }
    )
   
  }

}
