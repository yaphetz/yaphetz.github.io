import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadPDF() {
    let doc = new jsPDF;
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
    alert('s-a download dici')
  }
}
