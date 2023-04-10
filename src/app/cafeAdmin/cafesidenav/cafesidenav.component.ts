import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafesidenav',
  templateUrl: './cafesidenav.component.html',
  styleUrls: ['./cafesidenav.component.scss']
})
export class CafesidenavComponent implements OnInit {

  sideBarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen
  }
}
