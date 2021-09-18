import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/components/about/about.component';
import { BlogComponent } from './body/components/blog/blog.component';
import { SignUpComponent } from './body/components/sign-up/sign-up.component';
import { SignInComponent } from './body/components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
