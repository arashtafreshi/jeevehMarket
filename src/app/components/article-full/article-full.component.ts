import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DbService } from '../../services/db.service';
import { dbArticle } from '../../models/dbArticle';

const baseImageUri: string = "/api/couch/jeevehmarket/";

@Component({
    selector: 'app-article-full',
    templateUrl: './article-full.component.html',
    styleUrls: ['./article-full.component.css'],
    providers: [DbService]
})
export class ArticleFullComponent implements OnInit {
    article?: dbArticle = new dbArticle();
    image: string = baseImageUri;
    attachments: string[] = [];

    images: any[];

    constructor(private _db: DbService, private route: ActivatedRoute) {
        let id = this.route.snapshot.paramMap.get('id');
        this._db.GetDocumentById(id).subscribe(
            data => {
                console.log('success', data);
                //this.document = data["type"];
                this.article = data;
                console.log(this.article);
                this.attachments = this.getAttachments();
                if (this.attachments.length > 0) {
                    this.image += (this.article._id + "/" + this.attachments[0]);
                } else {
                    this.image = "http://lorempixel.com/300/300";
                }
                this.images = [];
                this.attachments.forEach(image => {
                    this.images.push({
                        source: baseImageUri + (this.article._id + "/" + image),
                        alt: 'Description for Image 1',
                        title: 'Title 1'
                    });
                });
            },
            error => console.log('oops', error)
        );
     }

    ngOnInit() {
        
        


    }


    getAttachments() {
        let keys: string[] = [];
        if (this.article._attachments) {
            for (let key in this.article._attachments) {
                if (this.article._attachments[key].length && key !== this.article.profilePicture) {
                    keys.push(key);
                    console.log(keys);
                }
            }
        }
        return keys;
    }

}
