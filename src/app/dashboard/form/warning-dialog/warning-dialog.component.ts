import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormComponent } from "../form.component";

@Component({
  selector: "app-warning-dialog",
  templateUrl: "./warning-dialog.component.html",
  styleUrls: ["./warning-dialog.component.scss"],
})
export class WarningDialogComponent implements OnInit {
  constructor() {}

  @Output() closeFormEvent = new EventEmitter;
  

  closeForm() {
    this.closeFormEvent.emit();
  }

  ngOnInit(): void {}
}
