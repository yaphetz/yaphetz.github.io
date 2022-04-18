import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnInit {

  constructor(private router: Router ) { 
    let routerData = this.router.getCurrentNavigation().extras.state;
    if(routerData)
    this.template = routerData.template;
    else
    this.router.navigate(['templates'])
  }

  template;

  ngOnInit(): void {
  }

}
