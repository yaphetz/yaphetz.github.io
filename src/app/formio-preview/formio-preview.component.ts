import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formio-preview',
  templateUrl: './formio-preview.component.html',
  styleUrls: ['./formio-preview.component.scss']
})
export class FormioPreviewComponent implements OnInit {
  form: any;
  constructor() {  
    this.form = {"components":[{"label":"Prenume","type":"textfield","key":"firstName","input":true,"tableView":true},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]};
  }

  ngOnInit(): void {
  }

}
