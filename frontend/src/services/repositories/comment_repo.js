import {articlesCollection} from '../../firebase';

export const getArticleComments = (articleSlug) => {
  return articlesCollection
        .doc(articleSlug)
        .collection('comments')
        .orderBy('date', 'asc').get();
}

export const writeArticleComment = (articleSlug, comment) => {
  return articlesCollection.doc(articleSlug).collection('comments').add(comment.toJSON());
}