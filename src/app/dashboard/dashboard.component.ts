import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { TemplateCard } from './../models/template-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  templateCardItems : TemplateCard[] = [
    {
      id: '1',
      title: 'Cerere 1',
      description: 'Description 1',
      content: 'content 1'
    },
    {
      id: '2',
      title: 'Cerere 2',
      description: 'Description 2',
      content: 'content 2'
    },
    {
      id: '3',
      title: 'Cerere 3',
      description: 'Description 3',
      content: 'content 3'
    },
    {
      id: '4',
      title: 'Cerere 4',
      description: 'Description 4',
      content: 'content 4'
    },
    {
      title: 'Cerere 4',
      description: 'Description 4',
      content: 'content 4'
    },
    {
      title: 'Cerere 1',
      description: 'Description 1',
      content: 'content 1'
    },
    {
      title: 'Cerere 1',
      description: 'Description 1',
      content: 'content 1'
    },
    {
      title: 'Cerere 1',
      description: 'Description 1',
      content: 'content 1'
    }
  ]

  ngOnInit(): void {}

  downloadPDF() {
    let doc = new jsPDF;
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
    alert('s-a download dici')
  }


}
