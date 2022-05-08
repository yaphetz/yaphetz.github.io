import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnInit {

  subscriptionForm: FormGroup;

  constructor(private router: Router ) { 
    let routerData = this.router.getCurrentNavigation().extras.state;
    if(routerData)
    this.template = routerData.template;
    else
    this.router.navigate(['templates'])
  }

  template;

  ngOnInit(): void {
    this.subscriptionForm = new FormGroup( {
      Nume: new FormControl()
    })
    console.log(this.template)
  }

}
