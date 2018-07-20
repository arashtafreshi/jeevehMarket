

export class dbArticle {
    _id: string;
    _rev: string;
    readonly type: string;
    title: string;
    header: string;
    tags: string[];
    dateCreated: Date;
    createdBy: String;
    active: boolean;
    content: string;
    lastModifiedBy: string;
    dateLastModified: Date;
    sharedWith: string[];
    permission: string[];
    author: string;
    datePublished: Date;
    _attachments:any;
    price:number;
    profilePicture:string;

    constructor() {
        this._id = null;
        this._rev = null;
        this.type = "article";
        this.title = null;
        this.header = null;
        this.tags = [];
        this.dateCreated = new Date(Date.now());
        this.createdBy = null;
        this.active = null;
        this.content = null;
        this.lastModifiedBy = null;
        this.dateLastModified = null;
        this.sharedWith = [];
        this.permission = [];
        this.author = null;
        this.datePublished = null;
        this.price = null;
        this.profilePicture = null;
    }
}
