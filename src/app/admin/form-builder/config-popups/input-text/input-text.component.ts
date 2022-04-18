import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextPopupComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data , public dialogRef: MatDialogRef<InputTextPopupComponent>) { }
  closeDialog: boolean = false;

  name: string = this.data.name;
  placeholder: string = this.data.placeholder;
  textarea: boolean = this.data.textarea;

  close() {
    console.log(this.data)
    this.data.type = 'text';
    this.data.name = this.name;
    this.data.placeholder = this.placeholder;
    this.data.textarea = this.textarea;
    if(this.data.textarea)
    this.data.type = 'textarea';
    this.dialogRef.close({data: this.data})
  }

}
