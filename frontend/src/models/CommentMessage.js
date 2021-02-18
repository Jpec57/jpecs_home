export default class CommentMessage {

    constructor(id, user, message, date){
        this.id = id;
        this.user = user;
        this.message = message;
        
        this.date = date ? new Date(date.seconds * 1000) : new Date();
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