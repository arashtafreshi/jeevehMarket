import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css'],
  providers:[DbService]
})
export class AdminUserEditComponent implements OnInit {
  @Input() user: User;
  isUpdating: boolean = false;
  attachments: string[] = [];

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  getAttachments() {
    let keys: string[] = [];
    if (this.user._attachments) {
      for (let key in this.user._attachments) {
        if (this.user._attachments[key].length) {
          keys.push(key);
          console.log(keys);
        }

      }

    }
    return keys;
  }

  updateUser() {
    this.isUpdating = true;
    this.db.Update(this.user._id, this.user).then(
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
      this.db.Upload(file, this.user._id).then(
        data => {
          console.log(data);
          this.db.GetUserById(that.user._id).subscribe(function(data){
            that.user = data;
            if (isProfilePic) {
              that.user.profilePicture = file.name;
              that.db.Update(that.user._id, that.user).then(
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

}
