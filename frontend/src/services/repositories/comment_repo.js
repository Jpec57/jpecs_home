import {commentsCollection} from '../../firebase';

export const writeArticleComment = (articleSlug, comment) => {
    commentsCollection.ref('comments/' + articleSlug).set({
        username: "hello",
        email: "world",
      });
      console.log(comment)

    // firebase.database().ref('comments/' + articleSlug).set(comment.toJson());
}