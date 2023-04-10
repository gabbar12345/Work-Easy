import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {

  constructor(private userService:UserService) { }
  // roles:any
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
  ngOnInit(): void {
    this.userService.role().subscribe((data:any)=>{
      this.member.roles=data;
    })
    this.userService.allManager().subscribe((data:any)=>{
      this.member.managerId=data;
    })
  }
  add(){
    console.log(this.member);
    
    this.userService.adduser(this.member).subscribe(
      (data)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success','user is added','success');
        window.location.reload();
      },
      (error)=>{
        console.log(error);
        alert('something went wrong');
      }
    )
  }
}
