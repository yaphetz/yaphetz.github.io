import { Component, OnInit } from "@angular/core";
import { AngularFirestore, DocumentChange } from "@angular/fire/compat/firestore";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { take } from "rxjs/operators";

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class SubmissionsComponent implements OnInit {
  constructor(private firestore: AngularFirestore) {}

  displayedColumns: string[] = ["name", "date", "time", "weight", "symbol"];
  expandedElement: any | null;
  submissions;

  ngOnInit(): void {
    this.firestore
      .collection("submissions")
      .valueChanges()
      .subscribe((data) => {
        this.submissions = data;
      });

      // this.firestore.collection("submissions")
      // .snapshotChanges().forEach(doc => {
      //   doc.forEach( document=> {
      //     console.log(document.payload.doc.data());
      //     console.log(document.payload.doc.id);
      //     this.submissions = 
      //   })
      // })

  }

  async getTime(date) {
    let bufferDate = date.toDate();
    return bufferDate.toLocaleTimeString();
  }

  async deleteSubmission(index) {
    let submissionId;
    this.firestore.collection("submissions").snapshotChanges().pipe(take(1)).subscribe( doc=> {
      submissionId = doc[index].payload.doc.id;
      this.firestore.collection("submissions").doc(submissionId).delete();
    })
  }

  async changeSubmissionStatus(index, status) {
    let submissionId;
    this.firestore.collection("submissions").snapshotChanges().pipe(take(1)).subscribe( doc=> {
      submissionId = doc[index].payload.doc.id;
      this.firestore.collection("submissions").doc(submissionId).update({state: status})
    })
  }

  submissionStatus(status) {
    switch(status) {
      case 'new':
        return 'mail';
      case 'pending':
        return 'drafts';
      case 'solved':
        return 'check_circle';
      default:
        return 'undefined';
    }
    
  }
}
