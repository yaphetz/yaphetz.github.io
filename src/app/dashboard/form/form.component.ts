import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TemplateCard } from 'src/app/models/template-card.model';
import { CardComponent } from '../card/card.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public warningPopup: MatDialog ,public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  @ViewChild(CardComponent) child: CardComponent;
  @Input() cardItem: TemplateCard;

  closeFormWithWarning() {
    this.openForm()
  }

  closeForm() {
    this.dialogRef.close();
  }

  openForm(): void {
    const dialogRef = this.warningPopup.open(WarningDialogComponent, {
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit(): void {
  }

}
