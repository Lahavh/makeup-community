import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/state/app-state';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
  }

  signInClick() {
    this.ngRedux.dispatch({type: "SIGN_IN_BUTTON"});
  }

}
