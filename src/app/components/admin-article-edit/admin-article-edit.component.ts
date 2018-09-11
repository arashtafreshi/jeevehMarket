import { Component, OnInit, Input } from '@angular/core';
import { dbArticle } from '../../models/dbArticle';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css'],
  providers: [DbService]
})
export class AdminArticleEditComponent implements OnInit {
  @Input() article: dbArticle;
  isUpdating: boolean = false;
  attachments: string[] = [];

  constructor(private db: DbService) { }

  ngOnInit() {
    //this.article = new dbArticle();
  }

  getAttachments() {
    let keys: string[] = [];
    if (this.article._attachments) {
      for (let key in this.article._attachments) {
        if (this.article._attachments[key].length) {
          keys.push(key);
        }

      }

    }
    return keys;
  }

  updateArticle() {
    this.isUpdating = true;
    this.db.Update(this.article._id, this.article).then(
      data => {
        console.log("Document updated.");
        this.isUpdating = false;
      },
      err => {
        console.log("error updating document.");
        this.isUpdating = false;
      }
    )
  }

  myUploader(event, isProfilePic) {
    let that = this;
    event["files"].forEach(file => {
      console.log(file);
      this.db.Upload(file, this.article._id).then(
        data => {
          console.log(data);
          this.db.GetDocumentById(that.article._id).subscribe(function(data){
            that.article = data;
            if (isProfilePic) {
              that.article.profilePicture = file.name;
              that.db.Update(that.article._id, that.article).then(
                data => {
                  console.log("Document updated.");
                  that.isUpdating = false;
                },
                err => {
                  console.log("error updating document.");
                  that.isUpdating = false;
                }
              );
            }
          });
        },
        err => { console.log(err) }
      );
    });
  }

  deleteImage(fileName:string){
    let del = confirm("Are you sure you want to delete this file? "+fileName);
    if(del){

    }else{
      
    }
  }

  // end of class
}
