import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from "rxjs/internal/Observable";


interface Template {
  active: boolean;
  template: string;
}

@Component({
  selector: "app-templates",
  templateUrl: "./templates.component.html",
  styleUrls: ["./templates.component.scss"],
})
export class TemplatesComponent implements OnInit {
  constructor(private router : Router, private firestore: AngularFirestore, private popup: MatDialog) {}

  templatesCollection: AngularFirestoreCollection<Template>;
  templates: Observable<Template[]>;
  templates2 = [];
  searchValue: string;

  ngOnInit(): void {
    this.templatesCollection = this.firestore.collection('templates');
    this.templates = this.templatesCollection.valueChanges();
    this.templates.subscribe( (data)=> {
      this.templates2 = data;
      this.templates2.forEach( (template)=> {
        template.template = JSON.parse(template.template)
      })
    })
  }

  updateSearch(term) {
    this.searchValue = term;
  }

  openTemplatePreview(template) {
    this.router.navigate(['templates', template.id], { state: template})
  }

  ngAfterViewInit() {

  }
}




