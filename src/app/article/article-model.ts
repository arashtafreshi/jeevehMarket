export class ArticleModel {
    header: string;
    body: string;
    image: string;
    author: string;
    date: string;

    constructor() {
        this.header = null;
        this.body = null;
        this.image = null;
        this.author = null;
        this.date = null;
    }

    toString(): string {
        var str = {
            header: this.header,
            body: this.body,
            image: this.image,
            author: this.author,
            date: this.date
        }
        return JSON.stringify(str);
    }
}
