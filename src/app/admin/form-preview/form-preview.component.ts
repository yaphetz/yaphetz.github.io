import { Component, Input, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {

  constructor() { }
  @Input() items: Array<GridsterItem> 

  ngOnInit(): void {
  }

}
