import { Component, OnInit } from "@angular/core";
import { CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';
import { InputModel } from "../form-models/input/input.model";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.scss"],
})
export class FormBuilderComponent implements OnInit {
  constructor( public popup: MatDialog ) {}

  options: any;
  dashboard: Array<GridsterItem>;

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      useBodyForBreakpoint: false,
      minCols: 2,
      maxCols: 4,
      minRows: 5,
      maxRows: 100,
      maxItemCols: 4,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0, hightlight: false, type: 'text-input'},
    ];
  }

  addItem(type): void {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1, hightlight: false, type: type, label: 'Nume'});
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  hightlightItem(item) {
    this.dashboard[this.dashboard.indexOf(item)].highlight = !this.dashboard[this.dashboard.indexOf(item)].highlight;
  }

  addTextInput() {
    let element: InputModel;
  }
}
