import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { TemplateCard } from './../models/template-card.model';
import { TemplatesService } from '../services/templates.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private templatesService: TemplatesService ) {}

  templateCardItems : TemplateCard[] = [];
  templateCardSubscription : Subscription;

  getTemplates() {
    this.templateCardSubscription = this.templatesService.getTemplates().subscribe(
      (response: TemplateCard[]) => {
        this.templateCardItems = response;
      },
      error=> {
        console.log(error);
      }
    )
  }



  ngOnInit(): void {
      this.getTemplates();
  }

  ngOnDestroy() {
    this.templateCardSubscription.unsubscribe();
  }

  downloadPDF() {
    let doc = new jsPDF;
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
    alert('s-a download dici')
  }


}
