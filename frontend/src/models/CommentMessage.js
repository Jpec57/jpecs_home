export default class CommentMessage {

    constructor(id, user, message){
        this.id = id;
        this.user = user;
        this.message = message;
        this.date = new Date();
    }

    toJSON(){
        return {
            id: this.id,
            user: this.user,
            message: this.message,
            date: this.date,
        };
    }
}