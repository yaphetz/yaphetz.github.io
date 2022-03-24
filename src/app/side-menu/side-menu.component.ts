import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  toolbarToggle: boolean = true;
  menuItems: any;

  constructor() {}

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
        name: 'Istoric cereri',
      },
      {
        name: 'Templateuri cereri',
      },
    ];
  }
}
