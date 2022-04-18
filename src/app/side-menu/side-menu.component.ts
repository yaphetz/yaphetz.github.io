import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  toolbarToggle: boolean = true;
  menuItems: any;

  constructor(public authService: FirebaseService) {}

  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
    this.menuItems = [
      {
        name: 'Cerere nouă',
        route: 'acasa',
      },
      {
        name: 'Schițe',
        route: 'drafts',
      },
      {
        name: 'Form builder',
        route: 'form-builder',
      },
      {
        name: 'Șabloane',
        route: 'templates',
      },
      {
        name: 'Istoric cereri',
      },
    ];
  }
}
