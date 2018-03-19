export class ArticleModel {
    header: string;
    body: string;
    image: string;
    author: string;
    date: Date;
    content: string;
    releaseDate: Date;
    tags:string[];

    constructor() {
        this.header = null;
        this.body = null;
        this.image = null;
        this.author = null;
        this.date = null;
        this.content = null;
        this.releaseDate = null;
        this.tags = [];
    }

    toString(): string {
        var str = {
            header: this.header,
            body: this.body,
            image: this.image,
            author: this.author,
            date: this.date,
            content: this.content,
            releaseDate: this.releaseDate,
            tags : this.tags
        }
        return JSON.stringify(str);
    }
}
