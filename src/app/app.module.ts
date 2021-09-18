import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './body/components/about/about.component';
import { BlogComponent } from './body/components/blog/blog.component';
import { PostComponent } from './body/components/blog/post/post.component';
import { SignUpComponent } from './body/components/sign-up/sign-up.component';
import { SignInComponent } from './body/components/sign-in/sign-in.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AppState, initialState } from './state/app-state';
import { appReducer } from './state/app-reducer';
import { createLogger } from 'redux-logger';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BlogComponent,
    PostComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<AppState>
  ) {
    const logger = createLogger();
    this.ngRedux.configureStore(
      appReducer,
      initialState,
      [logger]);

    this.ngRedux.dispatch({ type: "SIGN_IN_BUTTON" });
  }
}
