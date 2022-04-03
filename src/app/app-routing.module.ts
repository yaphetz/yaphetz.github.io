import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseService as AuthGuard } from './services/firebase.service';

import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SigninComponent } from './authenticate/signin/signin.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DraftsComponent } from './drafts/drafts.component';


const routes: Routes = [
  {
    path: 'acasa',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'drafts',
    component: DraftsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticateComponent,
    children: [
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'register',
        component: SignupComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
