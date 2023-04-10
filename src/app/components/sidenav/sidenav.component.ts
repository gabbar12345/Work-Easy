import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sideBarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen
  }
  
}
