export class Post {
    postTitle: string;
    postBody: string;
    postTimestamp: Date;

    constructor(postTitle: string, postBody: string) {
        this.postTitle = postTitle;
        this.postBody = postBody;
        this.postTimestamp = new Date();
    }
}