import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-sidenav',
  templateUrl: './emp-sidenav.component.html',
  styleUrls: ['./emp-sidenav.component.scss']
})
export class EmpSidenavComponent implements OnInit {
  sideBarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen
  }
}
