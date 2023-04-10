import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any=null;
  @Output()  toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private login:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.user=this.login.getUser();
  }

  toggleSlider()
  {
    this.toggleSidebarForMe.emit();

  }
  public log(){
    this.login.logout();
    this.router.navigate(['/'])
    
    
  }
}
