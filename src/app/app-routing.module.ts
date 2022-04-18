import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './admin/form-builder/form-builder.component';
import { TemplatePreviewComponent } from './admin/templates/template-preview/template-preview.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { AuthGuard } from './auth.guard';
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
    path: 'form-builder',
    component: FormBuilderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'templates',
    component: TemplatesComponent,
  },
  {
    path: 'templates/:id',
    component: TemplatePreviewComponent,
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
