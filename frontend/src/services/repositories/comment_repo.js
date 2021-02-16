import {commentsCollection} from '../../firebase';

export const writeArticleComment = (articleSlug, comment) => {
  commentsCollection.doc(articleSlug)
    .set({
        username: "hello",
        email: "world",
      });
      console.log(comment)
}