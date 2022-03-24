import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DraftsComponent } from './drafts/drafts.component';

const routes: Routes = [
  {
    path: 'acasa',
    component: DashboardComponent,
  },
  {
    path: 'drafts',
    component: DraftsComponent,
  },
  {
    path: '',
    redirectTo: 'acasa',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
