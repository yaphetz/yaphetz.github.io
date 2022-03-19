import { Component, Input, OnInit } from "@angular/core";
import { TemplateCard } from "src/app/models/template-card.model";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormComponent } from "../form/form.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  constructor(public popup: MatDialog) {}

  @Input() cardItem: TemplateCard;

  openForm(): void {
    const dialogRef = this.popup.open(FormComponent, {
      disableClose: true,
      data: this.cardItem
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }


  ngOnInit(): void {}
}
