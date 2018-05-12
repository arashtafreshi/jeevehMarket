import { Component, OnInit, Input } from '@angular/core';


import { MenuItem } from 'primeng/api';
import { dbArticle } from '../../models/dbArticle';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    providers: []
})
export class ArticleComponent implements OnInit {
    @Input() article: dbArticle;
    image: string = "/api/couch/jeevehmarket/";

    private items: MenuItem[];

    constructor() { }

    ngOnInit() {
        //this.articles = this.articleService.getArticles();
        this.items = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            }
        ];

        let attachments = this.getAttachments();
        if(attachments.length>0){
            this.image += (this.article._id + "/" + attachments[0]);
        }else{
            this.image = "http://lorempixel.com/300/300";
        }
    }

    getAttachments() {
        let keys: string[] = [];
        if (this.article._attachments) {
            for (let key in this.article._attachments) {
                if (this.article._attachments[key].length) {
                    keys.push(key);
                    console.log(keys);
                }
            }
        }
        return keys;
    }

}
