import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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



import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { FormComponent } from './dashboard/form/form.component';
import { WarningDialogComponent } from './dashboard/form/warning-dialog/warning-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    CardComponent,
    FormComponent,
    WarningDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
