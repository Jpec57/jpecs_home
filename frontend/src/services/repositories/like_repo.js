import {articlesCollection} from '../../firebase';

export const isLikedByUser = (articleSlug, userId) => {
  return articlesCollection
        .doc(articleSlug)
        .collection('likes')
        .where('', '==', userId)
        .limit(1)
        .get();
}

export const getLikes = (articleSlug) => {
    return articlesCollection
          .doc(articleSlug)
          .collection('likes')
          .get();
}

export const likesOrNotArticle = async (articleSlug, user) => {
    // var isLiked = await isLikedByUser(articleSlug, user);
    // if (){

    // }
  return articlesCollection.doc(articleSlug).collection('likes').add(user.toJSON());
}