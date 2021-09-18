import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../state/app-state';
import { UserStatuses } from '../user/user.class';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public userStatus: UserStatuses;

  constructor(private ngRedux: NgRedux<AppState>) { 
    this.userStatus = this.ngRedux.getState().userStatus;
    console.log("OUR USER STATUS: ", this.userStatus);
  }

  ngOnInit(): void {
  }

}
