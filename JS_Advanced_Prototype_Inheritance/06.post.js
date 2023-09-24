function solve (){

class Post {
    title;
    content;
    constructor(title, content){
    this.title = title;
    this.content = content;
    }
    toString(){
        return `Post: ${this.title}\nContent: ${this.content}`
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes){
        super(title,content); // invoke a superclass's constructor->constructor of the parent class Post(which is Prototype of class SocialMediaPost);
        this.comments = [];
        this.likes = likes;
        this.dislikes = dislikes;
    }
    addComment(newComment){
        return this.comments.push(newComment);
    }
    toString(){
        let inheritedSuperString = super.toString(); // access the property toString method and takes its result from parent class Post.
        let overallRating = this.likes - this.dislikes;
        if (this.comments.length <= 0 ){
            return `${inheritedSuperString}\nRating: ${overallRating}`;
        } else if (this.comments.length > 0) {
            let allCommentsString = "";
            this.comments.forEach((eachComment)=> {
                allCommentsString += `\n * ${eachComment}`
            })
            return`${inheritedSuperString}\nRating: ${overallRating}\nComments:${allCommentsString}`;
        }
    }
}

class BlogPost  extends Post{
    constructor(title,content,views){
        super(title,content);
        this.views = views;
    }
    view(){
        this.views++;
        return this;
    }
    toString(){
        let stringPostContent = super.toString();
        return `${stringPostContent}\nViews: ${this.views}`;
    } 

}

return {
    Post,
    SocialMediaPost, 
    BlogPost};


}