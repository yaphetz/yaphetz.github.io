import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";



import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { FormComponent } from './dashboard/form/form.component';
import { WarningDialogComponent } from './dashboard/form/warning-dialog/warning-dialog.component';
import { DraftsComponent } from './drafts/drafts.component';
import { FirebaseService } from './services/firebase.service';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { SigninComponent } from './authenticate/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    CardComponent,
    FormComponent,
    WarningDialogComponent,
    DraftsComponent,
    AuthenticateComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB4p20bnbC8hAFZ35aTB93_cavLI7Hqrdc",
      authDomain: "secretariat-online-dm.firebaseapp.com",
      projectId: "secretariat-online-dm",
      storageBucket: "secretariat-online-dm.appspot.com",
      messagingSenderId: "176948909840",
      appId: "1:176948909840:web:45cd74419d9dbfa14f3795",
      measurementId: "G-B5VFEH2MBW"
    }),
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
